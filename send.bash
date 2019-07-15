curl -X POST -H "Authorization: key=AAAAZEoMzXk:APA91bEsGzj_DXdR2wvsHwqLz0g2x-ZeRJBU2dUllqlGg1GTbA2BslgyOZ4Nch0hQmoR49GTi7Om5XyXkpu4dPDaKNfHAmTS236Qw0_1UKLVnZ526HlHILA8vOQ1KvLOgLmDXKgutDdU" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Hello World PWA",
    "body": "$1",
  },
  "to": "$2"
}' "https://fcm.googleapis.com/fcm/send"

