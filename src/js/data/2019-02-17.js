dataSetVersion = "2019-02-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "ブキ種別",
    key: "weaponclass",
    checked: false,
    sub: [
      { name: "シューター", key: "shooter", tooltip: "ブラスター、リールガン、ボトルガイザー以外のシューター" },
      { name: "ブラスター", key: "blaster" },
      { name: "リールガン", key: "nozzlenoze" },
      { name: "ボトルガイザー", key: "squeezer" },
      { name: "ローラー", key: "roller", tooltip: "フデ以外のローラー" },
      { name: "フデ", key: "brush" },
      { name: "チャージャー", key: "charger" },
      { name: "スロッシャー", key: "slosher" },
      { name: "スピナー", key: "splatling" },
      { name: "マニューバー", key: "dualies" },
      { name: "シェルター", key: "brella" }
    ]
  },
  {
    name: "クマサン印のブキを含まない",
    key: "glizzco",
    tooltip: "クマサン印のブキを除外します",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "わかばシューター",
    img: "y8z256p.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "スプラシューター",
    img: "EvLBpB5.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "ジェットスイーパー",
    img: "5j0a9Aw.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "ホットブラスター",
    img: "eh9LBZG.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "スプラローラー",
    img: "iSSl0Hv.png",
    opts: {
      weaponclass: [ "roller" ]
    }
  },
  {
    name: "ホクサイ",
    img: "CjJc6KA.png",
    opts: {
      weaponclass: [ "brush" ]
    }
  },
  {
    name: "スプラチャージャー",
    img: "2p7OSlK.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "バケットスロッシャー",
    img: "5Z4z1PZ.png",
    opts: {
      weaponclass: [ "slosher" ]
    }
  },
  {
    name: "バレルスピナー",
    img: "39bhFdc.png",
    opts: {
      weaponclass: [ "splatling" ]
    }
  },
  {
    name: "スプラマニューバー",
    img: "h03i4nG.png",
    opts: {
      weaponclass: [ "dualies" ]
    }
  },
  {
    name: "シャープマーカー",
    img: "GjtDFWK.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "プロモデラーMG",
    img: "TSZWXze.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: ".52ガロン",
    img: "XLoVVrE.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "N-ZAP85",
    img: "VAU6FNs.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "プライムシューター",
    img: "d2iIRNc.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: ".96ガロン",
    img: "dn3hCp6.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "ノヴァブラスター",
    img: "r5EyPK3.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "クラッシュブラスター",
    img: "XfGmYkJ.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "ラピッドブラスター",
    img: "kViF6l6.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "L3リールガン",
    img: "KnIaGsa.png",
    opts: {
      weaponclass: [ "nozzlenoze" ]
    }
  },
  {
    name: "H3リールガン",
    img: "uD0Pm5l.png",
    opts: {
      weaponclass: [ "nozzlenoze" ]
    }
  },
  {
    name: "カーボンローラー",
    img: "1KFCAIE.png",
    opts: {
      weaponclass: [ "roller" ]
    }
  },
  {
    name: "ダイナモローラー",
    img: "Gk8WMT7.png",
    opts: {
      weaponclass: [ "roller" ]
    }
  },
  {
    name: "ヴァリアブルローラー",
    img: "gSikfuL.png",
    opts: {
      weaponclass: [ "roller" ]
    }
  },
  {
    name: "スプラスコープ",
    img: "seNHDp4.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "リッター4K",
    img: "4qz4YQt.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "4Kスコープ",
    img: "naq2I9I.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "ソイチューバー",
    img: "5hEIrxj.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "ヒッセン",
    img: "iED1V0t.png",
    opts: {
      weaponclass: [ "slosher" ]
    }
  },
  {
    name: "スプラスピナー",
    img: "rJE26UL.png",
    opts: {
      weaponclass: [ "splatling" ]
    }
  },
  {
    name: "スパッタリー",
    img: "8tAuxcz.png",
    opts: {
      weaponclass: [ "dualies" ]
    }
  },
  {
    name: "ボールドマーカー",
    img: "x9CcL4n.png",
    opts: {
      weaponclass: [ "shooter" ]
    }
  },
  {
    name: "ロングブラスター",
    img: "EHJ9GC3.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "Rブラスターエリート",
    img: "wXnXWqg.png",
    opts: {
      weaponclass: [ "blaster" ]
    }
  },
  {
    name: "パブロ",
    img: "F7Ft3s6.png",
    opts: {
      weaponclass: [ "brush" ]
    }
  },
  {
    name: "スクイックリンα",
    img: "Ipo8cnX.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "14式竹筒銃・甲",
    img: "44t4D7y.png",
    opts: {
      weaponclass: [ "charger" ]
    }
  },
  {
    name: "スクリュースロッシャー",
    img: "uF3KLeU.png",
    opts: {
      weaponclass: [ "slosher" ]
    }
  },
  {
    name: "デュアルスイーパー",
    img: "J3stleQ.png",
    opts: {
      weaponclass: [ "dualies" ]
    }
  },
  {
    name: "パラシェルター",
    img: "lJlkP2u.png",
    opts: {
      weaponclass: [ "brella" ]
    }
  },
  {
    name: "キャンピングシェルター",
    img: "P01vZBa.png",
    opts: {
      weaponclass: [ "brella" ]
    }
  },
  {
    name: "ボトルガイザー",
    img: "Z4JBvIU.png",
    opts: {
      weaponclass: [ "squeezer" ]
    }
  },
  {
    name: "ケルビン525",
    img: "DRuj2Sf.png",
    opts: {
      weaponclass: [ "dualies" ]
    }
  },
  {
    name: "クアッドホッパーブラック",
    img: "uvTXEaS.png",
    opts: {
      weaponclass: [ "dualies" ]
    }
  },
  {
    name: "ハイドラント",
    img: "aT8VyN6.png",
    opts: {
      weaponclass: [ "splatling" ]
    }
  },
  {
    name: "スパイガジェット",
    img: "Br65HtV.png",
    opts: {
      weaponclass: [ "brella" ]
    }
  },
  {
    name: "クーゲルシュライバー",
    img: "sveH1C5.png",
    opts: {
      weaponclass: [ "splatling" ]
    }
  },
  {
    name: "エクスプロッシャー",
    img: "s9FkpHT.png",
    opts: {
      weaponclass: [ "slosher" ]
    }
  },
  {
    name: "ノーチラス47",
    img: "AfpTZYa.png",
    opts: {
      weaponclass: [ "splatling" ]
    }
  },
  {
    name: "オーバーフロッシャー",
    img: "vur6PyY.png",
    opts: {
      weaponclass: [ "slosher" ]
    }
  },
  {
    name: "クマサン印のブラスター",
    img: "eFvhePp.png",
    opts: {
      weaponclass: [ "blaster" ],
      glizzco: true
    }
  },
  {
    name: "クマサン印のシェルター",
    img: "1l91gkr.png",
    opts: {
      weaponclass: [ "brella" ],
      glizzco: true
    }
  },
  {
    name: "クマサン印のチャージャー",
    img: "AzcxuRK.png",
    opts: {
      weaponclass: [ "charger" ],
      glizzco: true
    }
  },
  {
    name: "クマサン印のスロッシャー",
    img: "R7rabag.png",
    opts: {
      weaponclass: [ "slosher" ],
      glizzco: true
    }
  }
];
