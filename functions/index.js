const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Inicializar con tu URL de Realtime Database
admin.initializeApp({
  databaseURL: "https://juanitaexpress-37e02-default-rtdb.firebaseio.com"
});

exports.asignarRol = functions.auth.user().onCreate(async (user) => {
  try {
    // 1. Validar número peruano
    if (!user.phoneNumber?.startsWith('+51')) {
      await admin.auth().deleteUser(user.uid);
      return;
    }

    // 2. Extraer número sin código país
    const telefono = user.phoneNumber.replace('+51', '');

    // 3. Buscar en RTDB
    const snapshot = await admin.database().ref(`usuarios/${telefono}`).once('value');
    
    // 4. Si no existe, eliminar usuario
    if (!snapshot.exists()) {
      await admin.auth().deleteUser(user.uid);
      return;
    }

    // 5. Asignar rol
    const { rol } = snapshot.val();
    await admin.auth().setCustomUserClaims(user.uid, { rol });
    
    console.log(`Rol ${rol} asignado a ${telefono}`);
  } catch (error) {
    console.error('Error:', error);
  }
});