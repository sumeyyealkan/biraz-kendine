# Biraz Kendine — ilk prototip

Bu, kadınların ve özellikle yoğun annelerin birkaç dakikalık mola seçebilmesi için hazırlanmış ilk web uygulaması prototipidir.

## İçinde neler var?
- “Çok bunaldım” için kısa rahatlama adımları
- Kısa dinlenme molası
- Nazik hareket molası
- Basit kişisel bakım molası
- Bebek ağlamasında güvenli ilk kontroller için genel rehber
- Telefon ekranına uyumlu tasarım
- PWA manifesti ve çevrimdışı önbellek desteği

## Önemli: çevrimdışı kullanım
PWA çevrimdışı özelliği, uygulama HTTPS üzerinden yayımlandıktan ve kullanıcı ilk kez internet bağlantısıyla açtıktan sonra çalışır. Dosyayı telefonda doğrudan açmak tek başına service worker'ı etkinleştirmez. İlk kurulum ve ana ekrana ekleme için internet gerekir. Tarayıcı ve cihaz desteği değişebilir.

## Ücretsiz yayımlama için sonraki adım
Bu dosyalar bir statik web barındırma hizmetine yüklenebilir. GitHub Pages gibi bir hizmet değerlendirilebilir; herkese açık kullanım, bağlantı ve hesap ayarları yayımlama sırasında kontrol edilmelidir.

## Nasıl test edilir?
1. Dosyaları bilgisayarda aynı klasöre çıkarın.
2. `index.html` dosyasını tarayıcıda açıp temel ekranları deneyin.
3. Çevrimdışı özelliği denemek için HTTPS üzerinden yayımlayın, internet varken bir kez açın, ardından uçak modunda test edin.

## Sağlık ve güvenlik notu
Bu prototip tıbbi tavsiye vermez. Bebek rehberi genel ilk kontrollerden ibarettir; acil belirtilerde acil sağlık yardımı alınmalıdır. Yayına almadan önce anne-bebek içeriği güvenilir sağlık kaynakları ve bir sağlık uzmanı tarafından gözden geçirilmelidir.
