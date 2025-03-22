function buatPohonNatal(tinggi) {
    for (let i = 0; i < tinggi; i++) {
      let spasi = " ".repeat(tinggi - i - 1);
      let bintang = "*".repeat(2 * i + 1);
      console.log(spasi+bintang);
    }
    
    let batang = " ".repeat(tinggi - 2) + "***";
    console.log(batang);
    console.log(batang);
  }
  buatPohonNatal(4);
  