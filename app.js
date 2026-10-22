const guides = {
  overwhelmed: {
    title: "Şu an çok bunalmış hissediyorsun.",
    intro: "Her şeyi şimdi çözmek zorunda değilsin. Güvenli ve mümkünse biraz daha sakin bir yerde bu adımlardan birini deneyebilirsin.",
    steps: [
      "Ayaklarının yere temasını fark et. Omuzlarını, çeneni ve ellerini mümkün olduğunca gevşet.",
      "Nefesini zorlamadan, rahat ettiğin şekilde yavaşça nefes alıp ver. İstersen birkaç tur tekrarla; başın dönerse normal nefesine dön.",
      "Etrafında gördüğün üç şeyi sessizce fark et. Kendine, “Şu an sadece bir sonraki küçük adımı düşünmem yeterli” de.",
      "İstersen biraz su iç veya yüzünü yıka. Bunları yapmak zorunda değilsin; sana hangisi iyi gelirse onu seç."
    ]
  },
  rest: {
    title: "Kendine minicik bir mola.",
    intro: "Bu bir görev değil. Mola verebildiğin kadar ver.",
    steps: [
      "Mümkünse oturabileceğin rahat bir yer bul.",
      "Bir kahve, çay veya su al. İçeceğin yoksa da sorun değil.",
      "Telefonu birkaç dakikalığına kenara bırakabilirsen bırak. Pencereden dışarı bakmak veya sessizce oturmak da mola sayılır.",
      "Kendine şunu hatırlat: Dinlenmeyi hak etmek için önce her şeyi bitirmek zorunda değilsin."
    ]
  },
  move: {
    title: "Küçük bir hareket molası.",
    intro: "Hedef terlemek veya kendini zorlamak değil. Rahat ettiğin kadar hareket et; ağrı, baş dönmesi veya rahatsızlık olursa dur.",
    steps: [
      "Ayakta veya otururken omuzlarını yavaşça birkaç kez geriye çevir.",
      "Kollarını rahatça uzatıp bırak. Nefesini tutma.",
      "Ayak bileklerini nazikçe hareket ettir veya yerinde kısa bir yürüyüş yap.",
      "İstersen burada bitir. Birkaç hareket de yeterli olabilir."
    ]
  },
  care: {
    title: "Kendine bakımın en küçük hâli.",
    intro: "Bugün uzun bir rutin yapmak zorunda değilsin. Tek bir küçük seçim yeter.",
    steps: [
      "Yüzünü suyla veya cildine uygun nazik bir temizleyiciyle temizleyebilirsin.",
      "Cildin uygunsa nemlendirici sür. Yeni bir ürünü denemek zorunda değilsin.",
      "Ellerine krem sürmek, saçını taramak veya su içmek de kendine bakım olabilir.",
      "Bittiğinde kendini değerlendirme. Bugün kendin için bir an ayırmış oldun."
    ]
  },
  baby: {
    title: "Bebeğin ağlıyor ve ne yapacağını bilemiyor musun?",
    intro: "Ağlamak birçok nedenle olabilir. Önce temel ihtiyaçları ve güvenliği kontrol et. Bu kısa liste tıbbi değerlendirme yerine geçmez.",
    steps: [
      "Bebeğin nefes alışını ve rengini gözle. Nefes almakta zorlanma, morarma, tepkisizlik veya ciddi bir kötüleşme varsa hemen acil yardım iste.",
      "Açlık, bez, gaz ihtiyacı, sıcak-soğuk ve yorgunluk gibi temel durumları kontrol et.",
      "Bebeği nazikçe kucağında tutup sakin sesle konuşabilir veya yaşına uygun, güvenli biçimde sakinleştirmeyi deneyebilirsin. Bebeği asla sarsma.",
      "Çok bunaldıysan bebeği sırtüstü, güvenli ve düz bir uyku alanına bırakıp birkaç dakika yakında sakinleşmen ve güvendiğin birinden yardım istemen daha güvenli olabilir.",
      "Özellikle 3 aydan küçük bebekte 38°C veya üzeri ateş, alışılmadık sürekli ağlama, beslenememe ya da hastalık endişesi varsa acilen sağlık uzmanına danış."
    ]
  }
};

const home = document.getElementById("home");
const guide = document.getElementById("guide");
const done = document.getElementById("done");
const title = document.getElementById("guide-title");
const intro = document.getElementById("guide-intro");
const steps = document.getElementById("steps");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
let currentGuide = null;
let currentStep = 0;

function showHome() {
  home.classList.remove("hidden");
  guide.classList.add("hidden");
  done.classList.add("hidden");
  currentGuide = null;
  window.scrollTo({top: 0, behavior: "smooth"});
}

function renderStep() {
  const data = guides[currentGuide];
  steps.innerHTML = "";
  const item = document.createElement("article");
  item.className = "step";
  const num = document.createElement("span");
  num.className = "step-num";
  num.textContent = String(currentStep + 1);
  const p = document.createElement("p");
  p.textContent = data.steps[currentStep];
  item.append(num, p);
  steps.append(item);
  progress.textContent = `${currentStep + 1} / ${data.steps.length} küçük adım`;
  next.textContent = currentStep === data.steps.length - 1 ? "Tamamladım" : "Sonraki adım";
}

function openGuide(key) {
  currentGuide = key;
  currentStep = 0;
  const data = guides[key];
  home.classList.add("hidden");
  done.classList.add("hidden");
  guide.classList.remove("hidden");
  title.textContent = data.title;
  intro.textContent = data.intro;
  renderStep();
  window.scrollTo({top: 0, behavior: "smooth"});
}

document.querySelectorAll("[data-guide]").forEach(button => {
  button.addEventListener("click", () => openGuide(button.dataset.guide));
});
document.getElementById("back").addEventListener("click", showHome);
next.addEventListener("click", () => {
  if (currentStep < guides[currentGuide].steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    guide.classList.add("hidden");
    done.classList.remove("hidden");
    window.scrollTo({top: 0, behavior: "smooth"});
  }
});
document.getElementById("finish").addEventListener("click", () => {
  guide.classList.add("hidden");
  done.classList.remove("hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
});
document.getElementById("again").addEventListener("click", showHome);

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
