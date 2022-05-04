import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class MetaDataService {
  getMetaData() {
    return this.metaData.sort((a,b) => a.openSeaId - b.openSeaId)
  }

  getMetaDataRandom() {
    return this.metaData.sort(() => Math.random() - 0.5)
  }

  getMetaDataOnlyFusion() {
    return this.metaData.filter(item => item.fusion.length > 0).sort((a,b) => b.openSeaId - a.openSeaId)
  }

  getMetaDataFusionParents(child:MetaData) {
    return this.metaData.filter(item => item.characterName == child.fusion[0] || item.characterName == child.fusion[1]).sort((a,b) => b.openSeaId - a.openSeaId)
  }

  getAlreadyFused() {
    const allItems = this.getMetaData()
    const fusions = this.getMetaDataOnlyFusion()
    const alreadyFused = allItems.filter(item => {
      const filteredChilds = fusions.filter(fusion => fusion.fusion.includes(item.characterName))
      return filteredChilds.length > 0
    });
    return alreadyFused.sort((a, b) => (b.name > a.name ? -1 : 1))
  }

  getMetaDataAswang() {
    return this.metaData.filter(item => item.type=="ASWANG").sort((a,b) => a.openSeaId - b.openSeaId)
  }
  getMetaDataMaligno() {
    return this.metaData.filter(item => item.type=="MALIGNO").sort((a,b) => a.openSeaId - b.openSeaId)
  }
  getMetaDataYokai() {
    return this.metaData.filter(item => item.type=="YOKAI").sort((a,b) => a.openSeaId - b.openSeaId)
  }
  getMetaDataEngkanto() {
    return this.metaData.filter(item => item.type=="ENGKANTO").sort((a,b) => a.openSeaId - b.openSeaId)
  }

  metaData:MetaData[] = [
    {
      "name": "MALIGNO #16 - Salisi",
      "characterName": "Salisi",
      "type": "MALIGNO",
      "typeCharId": 16,
      "description": "Salisi is the most notorious thief in Sansinukob. Cunning, elusive, and a master of stealth, Salisi has performed legendary heists where she has stolen some of the most coveted treasures in all of creation - including the Mane of The Golden Tikbalang, the Heart of Saragnayan, and the Meteor Cloak of the Kalinga.\n\nSalisi was the first-born child of two unknown Visayan deities. However, a cosmic aberration occurred and she was birthed as a mere mortal devoid of any god-like abilities. As per tradition, Salisi was cast out of Kaluwalhatian and forced to fend for herself in the world of man. But, it was during this cruel exile when her innate skills emerged.\n\nSalisi was naturally swift and quick-witted, and survived by stealing food and other goods from unsuspecting street merchants. With practice, her craft quickly sharpened, and Salisi developed into an expert infiltrator and a master tactician. Soon enough, she was robbing the vaults of the noble houses of Sansinukob. And her growing hoard of stolen arcane artifacts granted her the ability to perform supernatural feats of speed, luck, and agility.\n\nSalisi now scours the world for one final prize - the Black Rice of Biringan that grants immortality to any person who consumes it. Once she obtains this, she will become equal to the gods and will finally be allowed to return to the heavens where she was born.\n\nHowever, it remains to be seen why Salisi truly desires to return to Kaluwalhatian. Does she want to reunite with her mother and father? Does she desire vengeance on the unjust system that cast her out? Or is this simply part of a ploy that will allow Salisi to pull off the ultimate, god-like heist?\n\nSalisi was created in the Basilica by fusing Bulawan and Ribung Linti.\n\nEditions: 1 of 1",
      "fusion": [
        "Bulawan",
        "Ribung Linti"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 149366197,
      "image_url": "https://lh3.googleusercontent.com/fRpVwZPCy_0gfmQ1gp4L2xYuIkJ3Q53cbDxOBPTctAkQdWzPoM6LdYZs_sblbcqfWZQOQOSeuIlfG3N0PRUPUn2s41c_cfo-Etamu0I"
    },
    {
      "name": "MALIGNO #15 - Kulisap",
      "characterName": "Kulisap",
      "type": "MALIGNO",
      "typeCharId": 15,
      "description": "Kulisap are transfigured children who served as suicide bombers during the Manananggal War. They began their lives as humans who were kidnapped by Duwendeng Itim and subjected to extreme mind conditioning. Once they were ready, these brainwashed younglings voluntarily went through a rite of passage called “Pangungulisap” - where they were skinned alive under a moonless, rainy night. A cocoon formed around their bodies - inside, their limbs slowly warped and their body fluids were replaced by a luminous and explosive venom. The children emerged from their chrysalis as loyal and battle-ready Kulisap - primed to attack any target for the glory of the Duwende Kingdom.\n\n Kulisap squadrons were deployed en masse during the closing months of the Manananggal War - resulting in thousands of civilian casualties and the destruction of major population centers. The Treaty of Kalantiaw signed at the end of the war designated the creation of Kulisap as a war crime. To this day, the Duwende Kingdom denies any culpability for the creation of the Kulisap. The representatives of the Kingdom consistently state that these suicide-soldiers were created by a rogue faction of loyalists who acted without any authorization from the Duwende King. \n\nKulisap were created in the Basilica by fusing Duwendeng Itim and Santelmo.\n\nEditions: 1 of 1",
      "fusion": [
        "Duwendeng Itim",
        "Santelmo"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 126130996,
      "image_url": "https://lh3.googleusercontent.com/Gx02q1R4mmi5adqPPJTL-PmgBkd5oKlKYqXtY2koxXjeK6jLm7hF2MAFIMiIHRAgSi3YPPxEzcC3g086SrPx7B-Z5aAZAJl0GOjM7R8"
    },
    {
      "name": "YOKAI #20 - Futsunushi",
      "characterName": "Futsunushi",
      "type": "YOKAI",
      "typeCharId": 20,
      "description": "Futsunushi is the god of swords from Japanese folklore. Born from the blood of a murdered fire god, Futsunushi was tasked by the gods of the heavens to subjugate the earth. Together with the thunder deity Takemikazuchi, Futsunushi demanded the gods of the earth to submit to the authority of the heavens. Some gods conceded and relinquished their authority quietly. Those that refused to yield were slain. After Futsunishi's bloody task was done, he returned to his home in the sky. Thus, the rulership of Japan passed from the gods of the earth to the gods of the heavens - and their eventual descendants: The Imperial House of Japan.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 90541166,
      "image_url": "https://lh3.googleusercontent.com/I4OH0ZLlnfaxZn2dRQVHhT7EE5nWu_ir1g7TX7GTt-KYV2j0UWx-cxIHKYS0-z3vXZDvLintlRyYXuIIz0Z0uegTklARzTnhmKKrAg"
    },
    {
      "name": "YOKAI #19 - Katawaguruma",
      "characterName": "Katawaguruma",
      "type": "YOKAI",
      "typeCharId": 19,
      "description": "Katawaguruma are malevolent specters from Japanese folklore. During the Edo period, they roamed from town to town every night, hunting for impure souls that they could drag back to hell. The loud, crushing sound of a rolling wheel signaled the arrival of a Katawaguruma - and townsfolk would immediately shut their doors and windows, cowering inside their homes in fear. It was said that anyone who saw a Katawaguruma or gossiped about them would summon a terrible curse and bring calamity upon their entire village.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 88334627,
      "image_url": "https://lh3.googleusercontent.com/5pich6xHzrwTuJy6lB0Dd-A1E3LGRIIOlswKrKugfxvDjUmTePkMXuG2hzywaYtG87gQ7mKrInlg9aR4AT0OrggEXJuRC3fFpmEx"
    },
    {
      "name": "YOKAI #18 - Sunamura no Onryo",
      "characterName": "Sunamura no Onryo",
      "type": "YOKAI",
      "typeCharId": 18,
      "description": "Sunamura no Onryo was a pumpkin monster from Japanese folklore. During the Edo period, this specter relentlessly terrorized the villagers of Sunamura - a small farming town famous for its pumpkin crops. Like other Onryo spirits, Sunamura no Onryo’s existence was fueled by rage and a desire for vengeance. What torments were inflicted to a pumpkin to make it come back as a spirit of retribution? Which mortal was foolish enough to summon the wrath of this pumpkin phantasm? The answers to these mysteries have long been lost to time.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 84722939,
      "image_url": "https://lh3.googleusercontent.com/2MuM77VTrPw1U8qcvp8hBFaFPoYze4unzM-CqYtCsQbWBhN2L_xpdWGTl3udEh4jtcO8fBq0tM1ryFXPFl_IDmA627Vl6nbi8uHzT_0"
    },
    {
      "name": "YOKAI #17 - Tomoe Gozen",
      "characterName": "Tomoe Gozen",
      "type": "YOKAI",
      "typeCharId": 17,
      "description": "Tomoe Gozen was a legendary samurai from Japanese folklore. An elite warrior who was feared by even the bravest of swordsmen, Tomoe was as lovely as she was fierce and as loyal as she was ruthless. She served as a trusted military leader for General Minamoto no Yoshinaka during the Genpei War - commanding over 1000 soldiers on the battlefield. When Minamoto no Yoshinaka was slain and beheaded, Tomoe went on a mission of revenge and personally killed all of his enemies. Once her bloody task was done, Tomoe walked into the sea to her death, carrying her beloved general’s decapitated head so that no one would be able to desecrate it.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 83790441,
      "image_url": "https://lh3.googleusercontent.com/mpNmq6MF4raxnHyoMI-OTWFPPeVyA3y5QWzi1o6oaA_urn_EwJTSfZXWhkihNdIIev7QmAaXmAhRFTqWupwcPBhJoT_GDMSDm75OhA"
    },
    {
      "name": "YOKAI #16 - Toyotama Hime",
      "characterName": "Toyotama Hime",
      "type": "YOKAI",
      "typeCharId": 16,
      "description": "Toyotama Hime is the Princess of the Sea. This beautiful maiden lived her entire life in an underwater palace made of fish scales. But, when she fell in love with Hoori (the God of Grains), she left her home to come live with him on dry land. When Toyotama Hime became pregnant, she made Hoori promise to not gaze upon on her when she gives birth to their child. However, Hoori's curiosity got the better of him and he broke his promise by spying on her during childbirth. As a consequence, Hoori saw Toyotama Hime's true form - that of an enormous sea creature. Ashamed and heartbroken, Toyotama Hime transformed into a dragon and returned to the sea, forever leaving her beloved Hoori and their newborn son.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 82899437,
      "image_url": "https://lh3.googleusercontent.com/oSrwnnE1WT8OhIOyI2kPuIU_WozVwoQ27wYppBaAAd1xYExQ0FaULQSDPKF0kFLCtRzsNa5hmrWNA2V9UACT5g3crgQGGvt46XqX"
    },
    {
      "name": "YOKAI #15 - Tanuki",
      "characterName": "Tanuki",
      "type": "YOKAI",
      "typeCharId": 15,
      "description": "Tanuki are magical raccoon dogs from Japanese folklore. Jolly, mischievous, and fond of playing tricks on humans, the Tanuki are known for their massive, magical testicles that they can transform and use for various needs. They use their testicles as weapons, umbrellas, furniture, fishing nets, among many other things. They also possess the power to shape-shift, and can live among humans for decades without ever being detected.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 78308187,
      "image_url": "https://lh3.googleusercontent.com/mmYiDzlFilFk8nkESbMi5Kaih8uVgq9dQCSBh5N7NnDz5pEH_nc-JH2Ti75EiiygwuMeIUVcIhU28L1vnaL9XMgqCOHGPAxYWDPPwIU"
    },
    {
      "name": "ENGKANTO #01 - Tadhana",
      "characterName": "Tadhana",
      "type": "ENGKANTO",
      "typeCharId": 1,
      "description": "Tadhana is the devourer of fates. An enigmatic cosmic entity, Tadhana sustains his life force by consuming aberrant timelines - devouring alternate pasts, parallel presents, and imaginary futures that cannot and should not be. He performs a crucial role in balancing the multiverse - preventing it from becoming a tangled web of contradictory continuities and crumbling from the gravity of the conflicting stories contained within.\n\nTo aid him in his task, Tadhana commands three world-serpents known as Noon, Ngayon, and Magpakailanman. These celestial vipers serve as Tadhana’s heralds - they swim endlessly in the multiversal bleed in search of fetid timelines fit for Tadhana’s consumption. It is said that there is one timeline so broken that it threatens to become a cancer that will infect the entire Omniverse if Tadhana does not devour it with haste - an alternate present where the Filipino people were colonized for five centuries, and remain colonized still.\n\nTadhana was created in the Basilica by fusing Panaginip and Kumakamang.\n\nEditions: 1 of 1",
      "fusion": [
        "Panaginip",
        "Kumakamang"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 78185389,
      "image_url": "https://lh3.googleusercontent.com/B5rV-aslSRChIHvgN6P3yl_32rJsDfdunHt-FhbA9umVhBCjAkEf1ED7FXcs6aZw2mEz-dTXbQHmAoh1LWkwAIhWm5OMGvHBo6wY"
    },
    {
      "name": "YOKAI #14 - Enenra",
      "characterName": "Enenra",
      "type": "YOKAI",
      "typeCharId": 14,
      "description": "Enenra are smoke spirits from Japanese mythology. Fragile and delicate, the Enenra emerge from bonfires and slowly dance in the wind. Their dance is said to induce an overwhelming feeling of calm and relaxation on humans. However, the Enenra can only ever be seen by those with a pure heart.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 77324083,
      "image_url": "https://lh3.googleusercontent.com/0N8YixNkd2jJfG3AM6U6f4-WtSUadZ-xk0u7tJIFm-alrJZcOvCUJOXeCVKycnjtiAMBcm8BQIZbX_IzmoA47yqAsOp1zXk0XizvZ3U"
    },
    {
      "name": "YOKAI #13 - Konohana Sakuya",
      "characterName": "Konohana Sakuya",
      "type": "YOKAI",
      "typeCharId": 13,
      "description": "Konohana Sakuya is the goddess of all volcanoes in Japanese mythology. Her main shrine is located at Mount Fuji  and her emblem is the cherry blossom. Konohana Sakuya is considered as the avatar of Japanese life.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 76510285,
      "image_url": "https://lh3.googleusercontent.com/aPOo22cr923j56G-qDDg4W5_1peBoR2j_JhPL59JwamYQDunoj3Z3xLzeGIYtAWC8KBCoiLrUF7t6ruP54A1Gq2IbpjtP7N5xbpq"
    },
    {
      "name": "YOKAI #12 - Tengu",
      "characterName": "Tengu",
      "type": "YOKAI",
      "typeCharId": 12,
      "description": "Tengu are powerful spirits from Japanese folklore. Ascetic and monk-like, the Tengu live in solitude atop remote mountains and spend their lives meditating. However, the Tengu are not pacifists. When provoked, they can display a fearsome rage and savagery that can result in great calamities. Brave men often go into the mountains in search of the Tengu for their wisdom. And occasionally, the Tengu impart their knowledge and share their secrets with the worthiest of these mortals. Minamoto no Yoshitsune - one of Japan’s most legendary warriors - is said to have learned swordsmanship from the king of all Tengu.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 75554936,
      "image_url": "https://lh3.googleusercontent.com/UswpPLkkHVjV91NA_Jn__wJ4Oim3glndKVvb9ezjvKsLtmFoCGBRxpXWbBnlscWv4R1LrliIx-kq6u92Ft1B9y886MjrIi7QARQx"
    },
    {
      "name": "YOKAI #11 - Nekomata",
      "characterName": "Nekomata",
      "type": "YOKAI",
      "typeCharId": 11,
      "description": "Nekomata are cat demons from Japanese folklore. They begin their lives as common house cats. But when they reach old age, their tail splits into two and they transform into the monsters known as Nekomata. These creatures hold a great contempt for humans and possess the ability to reanimate corpses by performing a strange, ritualistic dance. Cunning and manipulative, the Nekomata are known to enslave the dead through necromancy - and the living through blackmail. It is said that the most powerful and evil Nekomata emerge from cats who were abused by their owners when they were young.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 74685967,
      "image_url": "https://lh3.googleusercontent.com/KJpvAh8Ai4rriU_MFPOH9WYctKQZGN6mRLR2_JqnjPN2CQ37PPdydx0wuKsJ-a97NPdhTyc_L-KU_OFhwSCCD_rbIAZH_P7bbqjXqQ"
    },
    {
      "name": "YOKAI #10 - Tako Nyudo",
      "characterName": "Tako Nyudo",
      "type": "YOKAI",
      "typeCharId": 10,
      "description": "Tako Nyudo are octopus monsters from Japanese folklore. Due to their deep-sea habitat, very little is known about the natural behavior or the Tako Nyudo. They are, however, fond of wearing human clothing and are known to prey on fishermen by ensnaring them with their tentacles and dragging them beneath the waves. The name Tako Nyudo literally means “Octopus Priest”.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 73346002,
      "image_url": "https://lh3.googleusercontent.com/Ge1d0jIPJoLAA1sjKVLDCU5_-ku4MV2GzCyCCghYcB1W0TaXWHvbiMX4IJbFFkRV8rDlNpBaNXBMWWLZKYzXUGefzJNXnZ01KQzoK80"
    },
    {
      "name": "YOKAI #09 - Takiyasha Hime",
      "characterName": "Takiyasha Hime",
      "type": "YOKAI",
      "typeCharId": 9,
      "description": "Takiyasha Hime was a master of Frog Magic. Her father - Taira no Masakado - was Japan's first samurai and the first person bold enough to lead an uprising against the emperor. After her father’s brutal defeat, Takiyasha Hime took it upon herself to avenge him. She learned the secrets of Onmyodo sorcery at Mount Tsukuba and used this power to summon an army of Yokai. Riding into battle with her giant toad familiar and commanding a fearsome Gashadokuro, Takiyasha Hime continued her father's insurgency until meeting her final fate at the hands of the warrior Oya Taro Mitsukuni.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 72794654,
      "image_url": "https://lh3.googleusercontent.com/Tnc_5BT4P7UcAh7nY01PyLvjrVurRsWQKElrIO92xWveUsIGz2FbqHtJo-0xI_TqXaB0CTOlDiWFj96ivIDXONXJHXFeGpNMrFvaJtY"
    },
    {
      "name": "YOKAI #08 - Nikusui",
      "characterName": "Nikusui",
      "type": "YOKAI",
      "typeCharId": 8,
      "description": "Nikusui are vampiric yokai that appear as young, beautiful women. They stalk mountain roads in search of lone men who are traveling by lantern light. Emerging out of the darkness, the Nikusui flirt with their prey and ask to borrow their lantern. Once they get close enough, the Nikusui snuff out the lantern. And in the pitch dark, they bite into their victim and suck the meat from their bodies - leaving nothing but a drained husk of bone and skin.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 72067060,
      "image_url": "https://lh3.googleusercontent.com/XkLorGPxWjWKFa9O_uNAIczgJQP32Ep3Zam_pnFuDcyI0wQ2OXKJ3NcItA32Q7P4ENzR6a1J8GOY7cv1l4FKtJqu2UixorOb_woGVw"
    },
    {
      "name": "YOKAI #07 - Kasa Obake",
      "characterName": "Kasa Obake",
      "type": "YOKAI",
      "typeCharId": 7,
      "description": "Kasa Obake are umbrella monsters from Japanese folklore. They belong to a class of Yokai known as Tsukumogami - discarded household objects that gain a soul once they reach 100 years of age. Most Kasa Obake are simple pranksters who enjoy surprising humans by licking them with their enormous, oily tongues. However, some malevolent Kasa Obake are known to attack mortals by using a paralyzing gaze to freeze people’s bodies so they can be mauled by wild animals.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 71555304,
      "image_url": "https://lh3.googleusercontent.com/f-VX_9IxUV3QJMD6bTBBJWSA-2PJUf8t4XZYz7h5U1ntiQK04_Pgfe3U_i7yoeO4tnoeMGXTURtYBAjTfgmb6FHs-81r5_qJWbh8"
    },
    {
      "name": "YOKAI #06 - Okiku Mushi",
      "characterName": "Okiku Mushi",
      "type": "YOKAI",
      "typeCharId": 6,
      "description": "Okiku Mushi are insect-like demons with the torso of a woman. The tale of the Okiku Mishi dates back to the Tokugawa period. It is said that they are born from the vengeful spirit of a servant girl named Okiku - who was falsely condemned, tortured, bound, and then thrown into a well to die.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 70796828,
      "image_url": "https://lh3.googleusercontent.com/TJh7IBz64w4vCoVly94ZP0FQhEmPMTFizCHigZtQMD6qnv2TWHFAuq6kPPKYcQ7sefSTIsYHMoCpy89eLv4w7VmXqk8vDO6CSgOyLA"
    },
    {
      "name": "MALIGNO #14 - Kumakamang",
      "characterName": "Kumakamang",
      "type": "MALIGNO",
      "typeCharId": 14,
      "description": "Baao, Buhi, and Bato – collectively known as the Kumakamang – are the feared warlords of Ibalong. They are three of the 333 daughters of Oryol and Handiong - the former rulers of the region. After Oryol and Handiong passed away, jealousy and the thirst for power consumed their daughters, and they began murdering each other for dominion. Baao, Buhi, and Bato – the smartest, the strongest, and the luckiest – were the final three who survived the slaughter. Perfectly matched against one another, the three sisters battled for 32 grueling days but none emerged victorious. On the 33rd day, Baao, Buhi, and Bato amicably surrendered, and entered a truce to rule Ibalong together as the Kumakamang.\n\nAfter joining forces, the Kumakamang discovered the extent of their strength and began setting their sights on the territories of other tribes. Honed in the art of warfare and subterfuge, the Kumakamang conquered all of their neighboring lands with ease. Their imperialist agenda was only halted when the forces of Kaluwalhatian formed an alliance with the Duwende Kingdom.\n\nNow, the bloodthirsty machinations of the warlords of Ibalong have seemed to have ground to a halt. Some say that their power over own their territory is waning. Some say that the tenuous truce between the three sisters is beginning to fray. Others suggest something more sinister - that the Kumakamang have sided with the Yamato and are secretly setting the grounds for a foreign invasion of Sansinukob.\n\nThe Kumakamang were created in the Basilica by fusing Oryol and Kumakatok.\n\nEditions: 1 of 1",
      "fusion": [
        "Oryol",
        "Kumakatok"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 69727288,
      "image_url": "https://lh3.googleusercontent.com/6p2HN4Ec0LPY13FcZHuxYV1-eE7MVt_OrspVF02on2enbfXGDfD5mX86PKoWYw722hvhsLGNh5d4nMgmUQc0wiujUmjuQLmMQqUTxQ"
    },
    {
      "name": "YOKAI #05 - Gashadokuro",
      "characterName": "Gashadokuro",
      "type": "YOKAI",
      "typeCharId": 5,
      "description": "Gashadokuro are skeletal giants formed from the souls of fallen warriors. They are possessed with a burning desire for vengeance and are known to wander the countryside at night to devour lone travelers. In addition to their fearsome size, the Gashadokuro are completely indestructible and possess the power to turn invisible. There is no way to banish or destroy a Gashadokuro. They will only disappear once the anger of the souls that comprise their body has been released through violence and carnage.\n\nEdition: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 68878630,
      "image_url": "https://lh3.googleusercontent.com/oDkkN_IHXRXDhhwX7ck48r6e2d1A_0nizAZW2cosPmsvlZaEhR7l_L8gmIAu4nYSLHTufwdGn_h8W9ICohrJQkUGdqEFQYeUjaP92A"
    },
    {
      "name": "YOKAI #04 - Jorogumo",
      "characterName": "Jorogumo",
      "type": "YOKAI",
      "typeCharId": 4,
      "description": "Jorogumo are shape-shifting arachnid predators that feed on men. They begin their lives as normal spiders. Once they reach 400 years of age, they develop the ability to transform into beautiful women and begin feeding on humans instead of insects. Cunning, calculating, and heartless, the Jorogumo's favorite prey are handsome young men looking for love. Once they have seduced a man into entering their lair, the Jorogumo ensnare them with silk, inject them with a powerful venom, and slowly feed on them while savoring the victim's long and painful death.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 68084166,
      "image_url": "https://lh3.googleusercontent.com/zX3Rm6kpYKyUH_Zt1mv_KzLub0-2GGWs7oqIJl712QkVEVv03XL20jtT0Szjp_7m9ERsuvqKkAEd2YltMtdDwjAQ95Y_iyQPKKnKcgk"
    },
    {
      "name": "YOKAI #03 - Honengyo",
      "characterName": "Honengyo",
      "type": "YOKAI",
      "typeCharId": 3,
      "description": "Honengyo are massive amphibian creatures from Japanese folklore. They spend their lives away from humans, and very little is known about their life cycle or behavior. Despite their fearsome appearance, the Honengyo are actually said to bring good luck. Seeing a Honengyo is an auspicious omen of a bountiful season and unexpected fortune.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 67549692,
      "image_url": "https://lh3.googleusercontent.com/Ur4vS4_U9NYsWXzgAkHjWpvRVJdbFQI60y3okX1ncui3lwzulnA0Aqsph3LkLa1fYwUR1W3ytYmZXrgFpIjKeFpgBTfVp8aCDmRkOA"
    },
    {
      "name": "YOKAI #02 - Hone Onna",
      "characterName": "Hone Onna",
      "type": "YOKAI",
      "typeCharId": 2,
      "description": "Hone Onna are the spirits of women who return from the grave because of undying love. Though their true form is that of a rotting, skeletal corpse, the Hone Onna appear to mortals as young, beautiful women in their prime.\n\nEven the Hone Onna themselves do not realize that they are dead. They are blinded by a single all-consuming desire - to have sex with the man that they loved when they were still alive. This unholy coupling lasts for days and even weeks. And with each session of intercourse, the Hone Onna unwittingly drain the life force of their lovers. If a Hone Onna is not stopped, she will suck all of her lover's life force dry until he is nothing but a pile of dust.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 66893390,
      "image_url": "https://lh3.googleusercontent.com/OUMNNuXY-wQjVSMynpIpfCuSOFtWR7yNBfhOgLDGk9p8MNFiXO2iFewHNXEPh-lp-qlmYVLGFu1vNAdxAMJu7eh9pw3joLyG1Muo"
    },
    {
      "name": "MALIGNO #13 - Sigwa",
      "characterName": "Sigwa",
      "type": "MALIGNO",
      "typeCharId": 13,
      "description": "Sigwa is the child of Amihan and Habagat. Born of a forbidden union, Sigwa is cursed with the ability to summon devastating typhoons simply by speaking. When she was a child, the first word that Sigwa uttered caused the destruction of countless towns and led to the deaths of thousands - including her own mother, Amihan. As a consequence, Sigwa’s tongue was cut out to prevent her from ever speaking another word. \n\nUpon the discovery of her curse, Sigwa was prophesied to be the cursed child who would kill all of the gods in Kaluwalhatian and bring about the complete destruction os Sansinukob. Fearing for his daughters life, Habagat absconded from Kaluwalhatian with Sigwa to protect her from the wrath of his fellow gods. The other deities scoured the cosmos for the location of the traitorous father and the cursed child for several mortal generations - to no avail. For there are rumors that Habagat hid Sigwa in the sole place that even Bathala cannot reach - the Lost City of Biringan.\n\nSigwa was created in the Basilica by fusing Habagat and Amihan.\n\nEditions: 1 of 1",
      "fusion": [
        "Habagat",
        "Amihan"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 66224098,
      "image_url": "https://lh3.googleusercontent.com/ogWHT8gV8e5IjO1IJFjDK8kLwOekdJB0glYohyg6lT1gK2hpLPqOOEl9WapAdRTOzsPLMmg64mYYaaKN4v2fQqj8H6TOK233fAOT"
    },
    {
      "name": "MALIGNO #12 - Dumulog",
      "characterName": "Dumulog",
      "type": "MALIGNO",
      "typeCharId": 12,
      "description": "Dumulog is the ageless dragon that lives atop Wagas - an ancient, dead tree that bears golden fruit which grants immortal life. More akin to a siren than a guardian, Dumulog sings an enchanting song that lures only the bravest of adventurers to seek out the tree and partake of its fruit. However, once an adventurer consumes the fruit of Wagas, their heart stops and their body dies. Dumulog then eats their corpse, absorbing their essence into his and providing them with never-ending life as part of his own body and legend.\n\nDumulog was once a humble snake, but through the ages, he has consumed thousands of glory-seeking adventurers from different tribes - the bravest of all Humans, the most daring of all Alan, the most greedy of all Siyokoy. By devouring the essence of all these legendary voyagers, Dumulog slowly transformed into his glorious, chimeric form. It is said that the only being that has survived an encounter with Dumulog and the ancient tree of Wagas is the heartless god Saragnayan.\n\nDumulog was created in the Basilica by fusing Alan and Markupo.\n\nEditions: 1 of 1",
      "fusion": [
        "Alan",
        "Markupo"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 65372959,
      "image_url": "https://lh3.googleusercontent.com/RmdPPQU7l11TPGUp49vE1ee-ZkFDn9C0010G_RB5FDNF7eOX2Ldyd3AIcKmAoTXt1tPBqzG5utVStlThKr-B5Uzy5NCGcfflmqQp"
    },
    {
      "name": "MALIGNO #11 - Paquita",
      "characterName": "Paquita",
      "type": "MALIGNO",
      "typeCharId": 11,
      "description": "Paquita was once the most beautiful Tigbanua in all of Sansinukob. Her blood-shot eye had the thickest lashes. Her jet-black hair swayed salaciously during a hunt. She was adored by all the males in her tribe and was envied by her sisters for her sickening good looks.\n\nBut Paquita’s narcissism got the better of her. She often strayed away from the pack to meet up with males from other tribes. During one such dalliance, she carelessly trampled on an anthill where a Nuno sa Punso lived. Enraged by this reckless imprudence, the Nuno sa Punso cursed Paquita with an inconspicuous size, a horrific countenance, and a noxious smell that no creature could endure. Consumed with shame, Paquita hid away from her tribe. She now relentlessly scours the land of Sansinukob, in search of the only place that holds the key to restoring her once legendary beauty - the Lost City of Biringan.\n\nPaquita was created in the Basilica by fusing Nuno sa Punso and Tigbanua.\n\nEditions: 1 of 1",
      "fusion": [
        "Nuno sa Punso",
        "Tigbanua"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 65369949,
      "image_url": "https://lh3.googleusercontent.com/NMQkKmZvHyyqKpYptkt3CRQLgKvgdBR-0hAa-giYD4TxzDnX3svKHgIpqSA2MslaKttlYtyKBPHgEYQR2nYR_SY6aVnVtCzrFxpwZQ"
    },
    {
      "name": "YOKAI #01 - Oni",
      "characterName": "Oni",
      "type": "YOKAI",
      "typeCharId": 1,
      "description": "Oni are powerful, hulking demons from Japanese folklore. An Oni is created when a truly evil human dies and their soul goes to one of the many Buddhist Hells. Oni serve the Great Lord Enma - the god of hell. They brutalize and torture humans, and serve as foot soldiers for the generals of the underworld.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 64136720,
      "image_url": "https://lh3.googleusercontent.com/qyJkYbAVnpOI4FIQjEi3euJj7noKWR2Kxly-JgvPX3jZTno0kb3vReXZe688bF2QKFXF7htCXqr-9Qhgbq8R-irl2fS5nxFuTmnnXg"
    },
    {
      "name": "ASWANG #99 - Daragang Magayon",
      "characterName": "Daragang Magayon",
      "type": "ASWANG",
      "typeCharId": 99,
      "description": "Daragang Magayon is the heroine of the legend of Mount Mayon in Bikol folklore. According to the legend, Daragang Magayon was so enchanting that men from faraway tribes went to her hometown just to glimpse of her beauty. One day, while bathing, she slipped on a rock and almost drowned in the Yawa River. Fortunately, a man named Panganoron saved her, and they eventually fell in love with each other. However, one of Daragang Magayon’s suitors, Pagtuga, got jealous and kidnapped her to force her to marry him. During the wedding, Panganoron arrived to rescue Daragang Magayon, but he got struck by Pagtuga’s poisoned arrow. Panganoron died in Daragang Magayon’s arms. In her grief, Daragang Magayon stabbed herself with a knife. It is said that a volcano started to form where the lovers where buried—which is now said to be Mount Mayon in the Bicol Region.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 63413919,
      "image_url": "https://lh3.googleusercontent.com/kbUA2F_hmgMsDIgl9kTS4nqSd_v895BJTBJkHrOtOOonzbwlLU1FZhf3ITxBcI7SDj6Uk84_2iS0gdhOii9y5TI1hJA3CWs_DXrMvx4"
    },
    {
      "name": "ASWANG #98 - Apo Namalyari",
      "characterName": "Apo Namalyari",
      "type": "ASWANG",
      "typeCharId": 98,
      "description": "Apo Namalyari is the supreme god and great provider of the Aeta people of Northern Luzon. The Aetas have a strong spiritual connection with him, and they consider Mount Pinatubo (an active volcano) as sacred for it is said to be Apo Namalyari’s abode. For this reason, after the catastrophic 1991 Mount Pinatubo eruption, the Aeta tribe elders performed a ritual to find out what made Apo Namalyari so angry that he made the volcano erupt. Through the help of a spirit medium, they discerned that the drilling operations for geothermal power was the cause of Apo Namalyari’s fatal wrath.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 62627338,
      "image_url": "https://lh3.googleusercontent.com/9PfSrT_aus8tB1_nDOiL80uF8sjjo7MK6ycmgPJDU0ix7XP_R9kBB1GjJc-iHFVRBhCfZeb4zQLiVXfwPzVxt3SUzZwzqxgcIAs9Hrg"
    },
    {
      "name": "ASWANG #97 - Tawong Lipod",
      "characterName": "Tawong Lipod",
      "type": "ASWANG",
      "typeCharId": 97,
      "description": "Tawong Lipod are wind nymphs from Bikol folklore. They reside in the heavens, and are the handmaidens of the beautiful moon god, Bulan. Youthful and elegant, the Tawong Lipod's duties include brushing Bulan’s long hair and providing him with entertainment through dance. When not at Bulan’s disposal, they sometimes come down to the mortal world to frolic with humans. The Tawong Lipod are helpful to people in need, but they can be remorselessly vindictive when offended or transgressed.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 61969662,
      "image_url": "https://lh3.googleusercontent.com/L1qitnlj_fDnfz1QbFiTL8aVFBmZWt5dEiIH0pm3nchoREM2uWUIZPk6DlqJuI6GZjmUSr4zvFv-br73_CEPaAn5yyFC9alcGxX6SQ"
    },
    {
      "name": "ASWANG #96 - Sarimanok",
      "characterName": "Sarimanok",
      "type": "ASWANG",
      "typeCharId": 96,
      "description": "The Sarimanok is a mythical bird from Maranao folklore. It is often depicted as a rooster with a rainbow-colored plumage. Some say that the Sarimanok is a pet of the Engkanto, and can bring luck to anyone who is able to catch it. Other tales say that, at the dawn of time, the Sarimanok was the one who freed Malakas (the first man) and Maganda (the first woman) from the bamboo stalk that they were born in. Latter legends warn that the world will come to an end on the day that the Sarimanok ceases to crow.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 61288897,
      "image_url": "https://lh3.googleusercontent.com/rmc3Hb6cee7Cd-ZYrggxyn758cWuiSQ56CmrXxsvxhWDo_YIg1Ezm-LT5-6N0LAU0-rLmjbnIk5Qra1Ze0qoPd90e0DCO5UxHovH"
    },
    {
      "name": "ASWANG #95 - Mambabarang",
      "characterName": "Mambabarang",
      "type": "ASWANG",
      "typeCharId": 95,
      "description": "Mambabarang are Filipino sorcerers that control armies of flesh-eating, parasitic insects through arcane incantations. They command their insects to enter the bodies of humans while they are asleep - burrowing under their skin, eating their organs, and laying eggs inside the victim. Once fully grown, the insects grotesquely burst through the victim's flesh, killing the Mambabarang’s target.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 60623847,
      "image_url": "https://lh3.googleusercontent.com/S41ktMAW109odof8qHM3EBMdjbiknQK0IFiWLzFLiBuEOYVOPhts8yyQ1tdeqnB00RGfRQqdKmrzQNT1gJSAkwUTMP7wHaj_IacG9Q"
    },
    {
      "name": "ASWANG #94 - Pasipo",
      "characterName": "Pasipo",
      "type": "ASWANG",
      "typeCharId": 94,
      "description": "Pasipo is the ancient Filipino god of music. Everything about this deity has been forgotten. After 300 years of colonial subjugation, only his name remains. But perhaps he still lives on, in the soul of the Filipino - a people perpetually enamoured with expressing and sharing their emotions though melody.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 59312661,
      "image_url": "https://lh3.googleusercontent.com/kS7IE2deVxF7XLH7xuAwjdr6rAvPhWHL7Zbdssl_ppTn3KS2-WhwI5MFYU1gnIjxzkPXMUwws6i3vEKY1uL2EADhu61lLgg_MQ5N0g"
    },
    {
      "name": "ASWANG #93 - Mandarangkal",
      "characterName": "Mandarangkal",
      "type": "ASWANG",
      "typeCharId": 93,
      "description": "Mandarangkal are cannibalistic spirits disguised as beautiful women. They use their charms to seduce men - luring them into having sex in order to kill them and devour their flesh. When their victims are on the verge of orgasm, the Mandarangkal reveal their true form - growing insect-like claws and sharp, pointed teeth to slit their parters' throats. The word \"Mandarangkal\" means \"praying mantis\" in Tagalog. And these two predatory creatures share the same unstoppable compulsion - to kill and eat their male sexual partners.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 58550236,
      "image_url": "https://lh3.googleusercontent.com/byoVpGCInH90ipiy1lQ7VAERvDj6LEPCUh8j50W9tqFO_I8_knhRlq3UvOzg3lIFnqTnZXf3DS5yCZionAk3VQvYM-MJ-Pn2_LHx"
    },
    {
      "name": "ASWANG #92 - Anitun Tabu",
      "characterName": "Anitun Tabu",
      "type": "ASWANG",
      "typeCharId": 92,
      "description": "Anitun Tabu is the goddess of wind and rain from Tagalog folklore. Fickle-minded and emotional, her joy is like the wind, her sorrow is like the rain, and her fury is like lightning. It is said that sunshowers are a sign that Anitun Tabu is happy. As such, pre-colonial Filipinos considered it good luck to be wed during such an event. Sacrifices of pinipig (pounded rice grain) are offered to Anitun Tabu to bring about good weather during harvest season.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 57940369,
      "image_url": "https://lh3.googleusercontent.com/-kcKKnt15T9oRlhOzPl2nKXLZ0o6DpYHJPhhNyDJaWgErFyCLgW9gvvqWDYQWn4RBh48MXlKMDTG0RQAAeND5j1ZRNFo-2W-yiHZ"
    },
    {
      "name": "ASWANG #91 - Dalikmata",
      "characterName": "Dalikmata",
      "type": "ASWANG",
      "typeCharId": 91,
      "description": "Dalikmata is the many-eyed goddess of clairvoyance from Visaya folklore. She has thousands of eyes surrounding her body, and each of them has the ability to see different things - the past and the future, the tangible and the invisible, what is and what will never be. Dalikmata bears witness to the actions of all mortals. And she often weeps at the evil and suffering that humans are capable of inflicting on one another. Morning dew is said to be Dalikmata's tears. As such, it is often collected by Babaylan (shamans) in order to create miracle cures for ailments of both sight and soul.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 56617234,
      "image_url": "https://lh3.googleusercontent.com/fLnqaVeA4bX4axBZxcf3N4VUBRV__zLpUkB6CfzIJgonTF_DO7nYA6_DH-TDXumL2LKG3rRq6P7uWUJLpsLr_D2dmRz0i41dK3or5g"
    },
    {
      "name": "ASWANG #90 - Sibbarayungan",
      "characterName": "Sibbarayungan",
      "type": "ASWANG",
      "typeCharId": 90,
      "description": "Sibbarayungan is a giantess from Apayao folklore. A large and powerful creature, Sibbarayungan is the wife of the man-eating giant Sappaw. Unlike her husband, Sibbarayungan displays a mother-like fondness for humans. She protects any lost mortals that accidentally wander into their conjugal domain by hiding them inside a wooden chest so Sappaw will not catch and devour them. Once her husband is out of sight, Sibbarayungan provides the lost men with food, water, and points them in the direction of their homes.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 55952092,
      "image_url": "https://lh3.googleusercontent.com/l3MLlK09hihET3-qf8H21dxO4DK-0O-2suDtcu00D64rykyt04B7ZLwNxZz59TN3md0Mh58EyJTmcikOr4LEapL1Rj5sO6MdEqWFagw"
    },
    {
      "name": "MALIGNO #10 - Maria Pisheya",
      "characterName": "Maria Pisheya",
      "type": "MALIGNO",
      "typeCharId": 10,
      "description": "Maria Pisheya is the spirit of vengeance that haunts the West Philippine Sea. She is the captain of the Black Lanong - a spectral warship helmed by the restless ghosts of Filipina warriors. Among her crew are the souls of Gabriela Silang and Teresa Magbanua (who fought the Spanish colonizers), Nieves Fernandez (a guerrilla fighter who slew scores of Japanese soldiers during the Second World War), Tuambalocam (the feared Sultana of Jolo), and Pangian Inchi Jamila (the best swordfighter in the history of the Philippines). \n\nMaria Pisheya was once a warrior who was slain in the Battle of Mactan. Even in death, she refused to believe that the fight was over. Fueled by an inhuman bloodthirst, Maria Pisheya has fought her way through the centuries - amassing an army of phantoms and sinking thousands of foreign ships that have dared to encroach on the sovereign waters of the Philippines. Some say that Maria Pisheya will only rest once she truly believes that the Filipino people are finally free.\n\nMaria Pisheya was created in the Basilica by fusing Makanduk and Kaperosa.\n\nEditions: 1 of 1",
      "fusion": [
        "Makanduk",
        "Kaperosa"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 55264831,
      "image_url": "https://lh3.googleusercontent.com/B9I22upMRbGa8nxt14SD3n9vuuYnHYmK_Q-7aAxk5ts0tzFkpy2a_iSseVoVlLPronAM0NfNlwNiFz8iIZydCzZgjKtmpXJbErWWwA"
    },
    {
      "name": "ASWANG #89 - Thalon",
      "characterName": "Thalon",
      "type": "ASWANG",
      "typeCharId": 89,
      "description": "Thalon are a dog-like creatures from Zamboanga folklore. They have four, human feet that point backwards and a human-like face. Male Thalon are simple tricksters, but their female counterparts enjoy devouring humans. Nonetheless, both male and female Thalon are cowardly creatures, and will run away as soon as their victim taunts them into battle. Their preferred victims are foreigners.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 54634039,
      "image_url": "https://lh3.googleusercontent.com/U_VaTta0B-PQj06xtOW-epQTI5f-cS6WGZsIjh_BppNEojeRUxSFWeZUX2Ti_vui4JN4Z8KrAjE6-flWJRFhF9wQ5XoWxpVpZJKBMRU"
    },
    {
      "name": "ASWANG #88 - Dayea",
      "characterName": "Dayea",
      "type": "ASWANG",
      "typeCharId": 88,
      "description": "Dayea is the goddess of secrets from Visaya folklore. It is said that she was also the embodiment of silence, justice and trust. The sign, sigils and prayers associated with this alluring and mysterious deity are now enigmas that have been lost to time.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 53839914,
      "image_url": "https://lh3.googleusercontent.com/YsvNCIQwlB8UQJjBvlc91bUTQRTG-SlPRakzcMDGAa_akqctMvcfAo9DBJBU5EHKMZBfQVXRCYEeSLaz5k83xY-qrrDpc--y5DmILVQ"
    },
    {
      "name": "ASWANG #87 - Linog",
      "characterName": "Linog",
      "type": "ASWANG",
      "typeCharId": 87,
      "description": "Linog is the goddess of earthquakes from Visaya folklore. One of the oldest primordial forces, Linog was the deity that ordained the marriage between Sikalak (the first man) and Sikabay (the first woman). It is said that all earthquakes in the mortal realm are caused by the turbulent movement of Linog’s giant breasts.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 52977521,
      "image_url": "https://lh3.googleusercontent.com/MYHmxJX3GKNgNZaUE-AiQ4O7UDPLQsFt4PNc5kLVlbhmsd27SQg03e6InI5EX-_Uo3SiTE3XlTcIVLf4eNYoYe_51lb205tDdgXhDQ"
    },
    {
      "name": "ASWANG #86 - Duwendeng Ginto",
      "characterName": "Duwendeng Ginto",
      "type": "ASWANG",
      "typeCharId": 86,
      "description": "Duwendeng Ginto (Gold Dwarves) are tiny, benevolent, earth spirits. They can grant humans the power of hypnotism and are known to bring wealth, fame, respect and victory to the few lucky people that they encounter. Unlike the other types of duwende, the Duwendeng Ginto provide these boons to mortals without asking for anything in return. They are the rarest and most coveted among all of the duwende species.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 52280181,
      "image_url": "https://lh3.googleusercontent.com/O9-g370fTfJKetEQza1DmADyBcCBK73Wlz--6vWHtWQ6Mw2einQO8tgVDrhqlE8zEtUHENtGtKz5zIVds_Nx8RfCCKIHkc_2CAhF"
    },
    {
      "name": "ASWANG #85 - Ynaguinid",
      "characterName": "Ynaguinid",
      "type": "ASWANG",
      "typeCharId": 85,
      "description": "Ynaguinid is the Diwata ng Digmaan (goddess of war). Cunning and merciless, her face is painted with blood and her body is covered with tattoos that symbolize the hundreds of foes she has slain. A formidable master of both weapons and poisons, Ynaguinid is said to have gifted mortals with the secret to a poison called “Odto\" (high noon) - a brutal concoction made from a mixture of viper venom and herbal oils. Any unfortunate soul struck by a weapon coated with Odto will die an excruciating death by noontime. Ancient Visayan war chiefs devoted ornate prayers and lavish offerings to Ynaguinid in order bless their clansmen with the bravery and might needed to destroy their enemies. She was worshipped along the two other Visayan gods of battle: Barangaw - the god of the rainbow, and Makanduk - the god of plunder.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 52064745,
      "image_url": "https://lh3.googleusercontent.com/1PkYVHYyr3Ve9TNZwitUmpCBtzFohw6Pa9JuN6Q8YeXNdrAggP5X0PG_yZM-wYZQm5z06M7dy6M6NrvB5mnjLoUo-n08JZBHiS2mMw"
    },
    {
      "name": "ASWANG #84 - Dihas",
      "characterName": "Dihas",
      "type": "ASWANG",
      "typeCharId": 84,
      "description": "Dihas is the goddess of medicinal herbs. Not much is known about this reclusive goddess who is said to reside in the tropical rainforests of the Philippines. But it is said that mangkukulam (sorcerers) and albularyos (healers) still go to great lengths to seek her out for her wisdom and guidance.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 51222071,
      "image_url": "https://lh3.googleusercontent.com/H2U1kEINP9rrcdnTpXQH25Z1lLdF4e4haWJRY-EGcS2DIBt-ukuMVpnslPKznRV8zBRr_GBJqhZuzh3ZI_UdJnufo5-G1trSZFv6__8"
    },
    {
      "name": "ASWANG #83 - Kumakatok",
      "characterName": "Kumakatok",
      "type": "ASWANG",
      "typeCharId": 83,
      "description": "The Kumakatok are three, hooded, ominous spirits (one female, two old men), who knock on doors in the middle of the night. It is said that those who open their doors will be told by the Kumakatok that a member of their household will soon die. To ward off the Kumakatok, people from Luzon and Visayas paint their doors with a white cross. It is said that the Kumakatok usually appear during wars and pandemics.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 50526608,
      "image_url": "https://lh3.googleusercontent.com/f6S-2NOPS3FwJNiI3U3icPwYGlnODQInBp_qg27VKTqV7FZVkuvUDyBcT2dZw--mToQ1S4jqe8meVjYXa7ayIYzi2j7NqmTV1QO_tw"
    },
    {
      "name": "ASWANG #82 - Mebuyan",
      "characterName": "Mebuyan",
      "type": "ASWANG",
      "typeCharId": 82,
      "description": "Mebuyan is the many-breasted goddess of death from Bagobo folklore. She rules Banua Mebu’yan (Mebuyan’s Town) in the underworld where she nurses all the dead babies until they are able to live on their own in the Gimokudan (spirit world). A doting mother of the dead, Mebuyan also ensures that every soul descending to her realm feels safe, content, and well - so that they will neither wish to return to their mortal bodies nor wish to ascend towards heaven.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 49297991,
      "image_url": "https://lh3.googleusercontent.com/XiRRgrWXuPRV2de0K_leEls6412RDXkxI1Cumt06gjB2afBVqM38yJZvphFkVsnN37Ue9Rv1wdoU20lxMPNM4Mx17_YV-VwL-WQ5fA"
    },
    {
      "name": "ASWANG #81 - Tibsukan",
      "characterName": "Tibsukan",
      "type": "ASWANG",
      "typeCharId": 81,
      "description": "Tibsukan are long-snouted piglets from Panay folklore. They use their long, prehensile snouts to burrow underground (where they prefer to live). The Tibsukan abhor being disturbed and inflict deadly ailments on mortals foolish enough to do so. For this reason, the Tibsukan are the favored pets of Engkanto, Mangkukulam, and Duwendes. They are often tasked to burrow under the houses of those that have displeased their masters.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 48753574,
      "image_url": "https://lh3.googleusercontent.com/uHEEK8yiDJmjubY0njbYFfZAknm_hbTAOk4OD_1HJceMwFNQ4JYKpF0kIEoDHWmqqM2A1wc6seTF3H_QPXTzy60pvNUD2zdJfURk9A"
    },
    {
      "name": "ASWANG #80 - Ribung Linti",
      "characterName": "Ribung Linti",
      "type": "ASWANG",
      "typeCharId": 80,
      "description": "Ribung Linti is the god of thunder and lightning from Visaya folklore. He is the master of thunderstorms and is able to harness the power of the elements to swiftly smite any mortal who displeases him. The name “Ribung Linti” literally means “a thousand lightnings”.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 48085367,
      "image_url": "https://lh3.googleusercontent.com/qsMgUdsrqDuHVpp4iWwWRMlqfYSDymnYOZRUHYThT1lsa8uWuQk_EqaYZQhSNzmyasSJCs3GBEFzlNPaP6ySrzrt5MmQ24-k9UrC5Q"
    },
    {
      "name": "MALIGNO #09 - Bungal",
      "characterName": "Bungal",
      "type": "MALIGNO",
      "typeCharId": 9,
      "description": "The Bungal are a tribe of one-eyed female warriors that reside in “Bungal” - a remote village in the lowlands of Sansinukob. They worship the war goddess “Bungal” (Mayari) and are said to be descended directly from her “Bungal” (bloodline). The entire language of the Bungal consists of only one word - “Bungal”. Because of this, the Bungal are often mistaken to be backwards and primitive. However, the Bungal language is an advanced form of communication which uses intonation instead of words and syntax. The word “Bungal” has hundreds of thousands of different intonations that function like pictograms. Their tribe is in fact one of the oldest civilizations in Sansinukob - and the very first to use domesticated animals for both agriculture and warfare. The hidden village of Bungal is said to house one of the seven portals to the Lost City of Biringan. And the beautiful and battle-ready Bungal will do everything in their power to prevent outsiders from accessing this arcane passageway.\n\nBungal were created in the Basilica by fusing Bungisngis and Mayari.\n\nEditions: 1 of 1",
      "fusion": [
        "Bungisngis",
        "Mayari"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 47950867,
      "image_url": "https://lh3.googleusercontent.com/mo0_gBwYGRbJc36uPGYcuwfCtGY1BXGxjlv6vHZxzHixQmn9IjnkQ7i-un5hPV8u_Mntz0qsO1jYp_ISIsaJxFs6_bx3iUZ3eOCf1zc"
    },
    {
      "name": "ASWANG #79 - Amihan",
      "characterName": "Amihan",
      "type": "ASWANG",
      "typeCharId": 79,
      "description": "Amihan is the goddess of the northwest wind. A peace-loving deity, Amihan is responsible for moderate temperatures and the trade winds used by ship captains to navigate the world's oceans. Amihan shares dominion over the seasons with her brother, Habagat - the god of the southwest wind. Amihan and Habagat are forbidden to touch one another. If they do, the world will be destroyed.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 47587438,
      "image_url": "https://lh3.googleusercontent.com/xAuBMCSgMGipMbLUqgXsvPqGOGsQm3p56AsR5_jktVYYBusFU8WVRixE5WUIEEJ_yQLsuEKTOlo9y6LUMIEPLZGT1BhxfVtv8jLmiVo"
    },
    {
      "name": "ASWANG #78 - Minokawa",
      "characterName": "Minokawa",
      "type": "ASWANG",
      "typeCharId": 78,
      "description": "The Minokawa is a giant bird from Negros folklore. Its beak and claws are made of steel, its eyes are made of mirrors, and each of its feathers is as sharp as a sword. This cosmic predator lives beyond the sky and is responsible for eclipses - for it has the ability to swallow both the moon and the sun. It is said that one day, the Minokawa will also devour the Earth.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 47034919,
      "image_url": "https://lh3.googleusercontent.com/Rmdk-Mrg5qEhbiNZvw6QCt1kmudEbrl8jPFaJbzGXgFS4m8G3nqP4Et64XUaaGlMCw4GD89B26pv96GMwJIKFTVBUhE6QPvspnAJV6g"
    },
    {
      "name": "ASWANG #77 - Bukaw",
      "characterName": "Bukaw",
      "type": "ASWANG",
      "typeCharId": 77,
      "description": "Bukaw are tiny owl people from Marinduque folklore. They are fun-loving, friendly, and love to ride the \"uyo\" - the flower sheath of a coconut. Bukaw are attractive and doll-like in appearance. Their messy, golden hair can be used as an Agimat which endows the holder with the power to command the minds of mortals.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 46608799,
      "image_url": "https://lh3.googleusercontent.com/7jz1tg9ce1TOf83dJcLY2XTEDnmwAf8LDeIDmENe-T9Z-UTVxQEW84hRAiID2fVsOBCp7AI-rOkO2Y1VK85gSHGBbcvT0LvTsOzqBw"
    },
    {
      "name": "ASWANG #76 - Mahomanay",
      "characterName": "Mahomanay",
      "type": "ASWANG",
      "typeCharId": 76,
      "description": "Mahomanay are forest spirits from Bagobo folklore. They take the form of fair-skinned men who dwell in trees. The solemn duty of the Mahomanay is to act as the guardians of forest animals - watching over them and protecting them from harm. Any mortal must present them with an offering of betel nuts before being allowed to hunt inside their domain. The Mahomanay are the male counterparts of the beautiful, red-skinned Tahamaling.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 45417581,
      "image_url": "https://lh3.googleusercontent.com/oWeFrCPXthZR_gJsJv2am4Z3bH4qZWaYUTNxG67x3b4aG2aM8Cl_FOOb3mbGPSXnQ_f7fGA3sCRKBFYjU5Rr8nTt7OXv3lXxhjN5tg"
    },
    {
      "name": "ASWANG #75 - Barangaw",
      "characterName": "Barangaw",
      "type": "ASWANG",
      "typeCharId": 75,
      "description": "Barangaw is the god of the rainbow. To the ancient Visayans, the rainbow symbolized luck, hope, and victory in war. It was Barangaw's duty to transport the souls of worthy mortals to the heavenly fortress of the gods. Ancient Visayan warriors worshipped Barangaw along with their two other gods of battle: Makanduk - the god of plunder, and Ynaguinid - the goddess of war.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 44871721,
      "image_url": "https://lh3.googleusercontent.com/K-NCJhxF9dSHyjF4F4kqZNvZkdRLp58xD_PU8ghPkd4kqsJeiIcxdAxqNxsowfjmqSNZkm1EjYP7HolLEBlp9Th56RifGgpYF-DFfQ"
    },
    {
      "name": "ASWANG #74 - Mantiw",
      "characterName": "Mantiw",
      "type": "ASWANG",
      "typeCharId": 74,
      "description": "Mantiw are giant spirits from Panay folklore. These thirty-foot tall creatures are often spotted taking leisurely strolls in wide, open fields while whistling. Though calm and peaceful by nature, the Mantiw become easily offended when they hear a mortal attempting to whistle along with them. They will immediately grab any human that does this and carry them off to the tallest coconut tree in sight - abandoning them at the very top without any means of climbing back down.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 44315052,
      "image_url": "https://lh3.googleusercontent.com/13mzIBYf6zLaKRjS9fWRxU4_rMFUVWOPzoW2U-nUeam46ZaI3-7dkjyXkiqfgeNnqDRttPAQ_A27AGEcZ8BY1cOOgjZ0YkfpXi3gsw"
    },
    {
      "name": "ASWANG #73 - Laqui",
      "characterName": "Laqui",
      "type": "ASWANG",
      "typeCharId": 73,
      "description": "Laqui are horned forest creatures from Bikol folklore. They have the feet of a goat and the face of a human. Despite their terrifying visage, the Laqui are gentle and harmless. It is said that the Laqui were originally spirits called Yasao. A dark god cursed the Yasao to roam the earth in this frightening form as punishment for their refusal to persecute and terrorize mortals.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 43815833,
      "image_url": "https://lh3.googleusercontent.com/akslP-2AZ96T_0kZBP2818P_1AwfYvTd7H1YTebelzM8MNBEQYx72D-kV_jJUReCpc5eCPwi0M_ZrHzqllGc_z33VREjm6XgOSbl"
    },
    {
      "name": "ASWANG #72 - Duwendeng Berde",
      "characterName": "Duwendeng Berde",
      "type": "ASWANG",
      "typeCharId": 72,
      "description": "Duwendeng Berde (Green Dwarves) are tiny, benevolent forest spirits. They can teach humans how to use plants for magic rituals that bring incredible luck and material wealth. However, the Duwendeng Berde only talk to children. To uncover their secrets, one must have a pure, untainted heart.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 41328686,
      "image_url": "https://lh3.googleusercontent.com/Ch0M-5Hs2wuR5FmOjZNB_qBHMyL-lLztRQO9J9dlPYUp630yjG4UAIfGYAQzwc50TZXnCGaH8mzrO52PoaRWX5GmGpsS5c1qHDHY"
    },
    {
      "name": "ASWANG #71 - Mangangaway",
      "characterName": "Mangangaway",
      "type": "ASWANG",
      "typeCharId": 71,
      "description": "Mangangaway is the goddess of disease. In disguise as a simple healer, she roams the earth to spread illness and suffering. She has a deep distaste for humans, and will often prolong a person's death for months by using ancient poisons and arcane rituals. Mangangaway is the most wicked among the agents of Sitan (the god of evil). Together with Manisilat (the goddess of broken marriages) and Hukluban (the goddess of death), she aids the god of evil in spreading chaos and destruction in the mortal realm.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 40742965,
      "image_url": "https://lh3.googleusercontent.com/s_m7gzGQOXfjkVN92ihG90oC59_U8yKtqIo52-R87QRupilBUsnuvxIZpVr75y38areMMz-N6edNZiGPNJALwLhhOXywE4wTN5b4hg"
    },
    {
      "name": "ASWANG #70 - Anggitay",
      "characterName": "Anggitay",
      "type": "ASWANG",
      "typeCharId": 70,
      "description": "Anggitay are Filipino centaurides. They have the upper body of a maiden, the lower body of a horse, and a single horn protruding from their foreheads - much like a unicorn. These elusive creatures from Tagalog folklore are said to be attracted to precious gemstones and can only be seen during sunshowers.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 40290496,
      "image_url": "https://lh3.googleusercontent.com/V_bgwXSW1nnB8a-tY8ZOSi8i9jXCCDHyT093nGl4g2X7Loj2NH2RyxDpicKlmCa8ma5R-Jn9rFOPCOLsb6QBoKhjmT41zdQW2Fkl"
    },
    {
      "name": "ASWANG #69 - Tambaluslos",
      "characterName": "Tambaluslos",
      "type": "ASWANG",
      "typeCharId": 69,
      "description": "Tambaluslos are bizarre forest-dwelling creatures from Bikol folklore. They have a host of grotesque features: long, spindly limbs, a freakishly large grin, and a massive, oversized penis. The Tambaluslos prey on people who are lost in the jungle - laughing maniacally while rabidly chasing their targets. The only way to escape a pursuing Tambaluslos is to take your clothes off and wear them inside-out. The Tambaluslos will find this foolish act hilarious, and they will laugh so hard that their lips will cover their eyes - allowing you to escape without being seen.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 38321862,
      "image_url": "https://lh3.googleusercontent.com/jOb4rHq0UFxk4EIFiEU1erBNLs2kbQav4KckmeWjrPFP1pe41McrxkrPD9NeZbaFgYFCe1IpOoN7zBLHyG3LXIjK4a-teJxp8FIE8g"
    },
    {
      "name": "ASWANG #68 - Amomongo",
      "characterName": "Amomongo",
      "type": "ASWANG",
      "typeCharId": 68,
      "description": "Amomongo are violent, monkey-like creatures from Visaya folklore. They stand around 5 feet tall and are highly aggressive - using their long, sharp claws to disembowel their prey without hesitation. Amomongo are known to sneak into farms in the dead of night to feed on livestock such as goats and chickens. Humans that are foolish enough to try and stop them often meet a savage and bloody end. The stealthy Amomongo are difficult to spot and track down. It is rumored that they live inside a complex cave system at the foot of the sacred Mount Kanlaon.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 38087299,
      "image_url": "https://lh3.googleusercontent.com/hj54mnfUJoGoHJ5sNinn3AnEcKJaDC6MU6bWSJVtICyHgxWOLk85tseAAexbln7hDVJ0dpiePbM5zEKVT2aa3oMz5sa8NDYuvixlcR0"
    },
    {
      "name": "ASWANG #67 - Sarawali",
      "characterName": "Sarawali",
      "type": "ASWANG",
      "typeCharId": 67,
      "description": "Sarawali is the god of lust from Panay folklore. He possesses a seductive aura that is irresistible to both humans and deities alike. Sarawali is responsible for all mortal acts of adultery, polygamy, and incest. He is the twin brother of the goddess of desire, Nagmalitong Yawa.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 37918627,
      "image_url": "https://lh3.googleusercontent.com/6nRI87jdB7g5TpbZ2VwtDVhmcTG4YH6SocDiNEtnqYkFSkvSndob6nOmw2TBpO-GjL3Ub8cq3o0TvfB27wF5FEpUYud9_w87J7n5ZEk"
    },
    {
      "name": "ASWANG #66 - Maria Sinukuan",
      "characterName": "Maria Sinukuan",
      "type": "ASWANG",
      "typeCharId": 66,
      "description": "Maria Sinukuan is the Diwata (mountain goddess) that resides at Mount Arayat in Pampanga. She was once a god of war and death. But, once the Spanish colonizers conquered the Philippines, she retreated into Mount Arayat to protect its wildlife. Maria Sinukuan safeguards the flora and fauna of her mountain abode and is known to turn greedy poachers who defile her domain into pigs.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 37669949,
      "image_url": "https://lh3.googleusercontent.com/9FEKfFIQQBGpU4WPZhKhW6iRzAoBdlBm-GD0Lg0yJlvWc1RZAOsK0ybIS8iujc-AwdIuwB7G8ulVaIR3JMDhMlxCr7l1qHy_PNPbNQ"
    },
    {
      "name": "ASWANG #65 - Lakang Balingasay",
      "characterName": "Lakang Balingasay",
      "type": "ASWANG",
      "typeCharId": 65,
      "description": "Lakang Balingasay is the god of insects. He is the Filipino counterpart of the western demon Beelzebub. Not much is still known about this enigmatic insect deity worshipped by the ancient Tagalogs. But it is said that he was a feared and powerful jungle spirit who lived inside poisonous trees. His divine emblems were ants, bees, and beetles.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 37485275,
      "image_url": "https://lh3.googleusercontent.com/shWWkGZ6UgHdbj3fhbbg8C315sfYukEPzzWYBRXqjni9OcPscPxB6HUTEygOuRk2ZRi8NdtqxX5TuXe6h7opL9DjvvKdZwQyitaZDlc"
    },
    {
      "name": "ASWANG #64 - Mansalauan",
      "characterName": "Mansalauan",
      "type": "ASWANG",
      "typeCharId": 64,
      "description": "Mansalauan are Filipino chimeras. They are human-sized flying creatures with the head of a lizard, the wings of a bat, and the legs of a man. Mansalauan feed by forcing their long, prehensile tongues into the bodies of their human prey and sucking out the victim's internal organs.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 37016724,
      "image_url": "https://lh3.googleusercontent.com/aqer5gcN0OVuVkO5z8s-3RP-osZJcCMofh3KtyIwnIeTzrP8L5hLanIubNHX5uM-onDCn9RNuswFe2OXRu0SRIWlX7ssze2QJinZVm8"
    },
    {
      "name": "ASWANG #63 - Mangkukulam",
      "characterName": "Mangkukulam",
      "type": "ASWANG",
      "typeCharId": 63,
      "description": "Mangkukulam are Filipino witches. They practice “Kulam” - a form of native folk magic. Mangkukulam have the power to cast curses and summon plagues. They obtain strands of their victim’s hair (or a piece of their personal belongings) and attach it to a doll to manipulate and inflict harm on their targets. The craft of “Kulam” uses earth, fire, herbs, and blood for its rituals. It puts an emphasis on the mastery of Magica Baja (low magic) and the innate power of the self.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 36803340,
      "image_url": "https://lh3.googleusercontent.com/pQdAULMjrdGup1Q-p-wJnU5I4hmXCeSNh9xblkut7Yhfxd3pLYxSL8Np670sbVwzH2S4OWk1YgjsRKg16NRUQZEYkNNZdyVUVCvtaw"
    },
    {
      "name": "ASWANG #62 - Lagtaw",
      "characterName": "Lagtaw",
      "type": "ASWANG",
      "typeCharId": 62,
      "description": "Lagtaw are tree-dwelling demons from Tausug folklore. Covered in scaly skin and possessing eyes that burn like fire, the Lagtaw hide in the knots of trees to ambush humans who are wandering alone in the forest. Some say that these demons only attack their prey physically, while others warn that the Lagtaw can actually enter the minds of their victims.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 36542425,
      "image_url": "https://lh3.googleusercontent.com/7VCmPWhERZgsrslQf9Shtwi1E7xo0fqQRu2Tp6m3t8gKmcB8ajPlTlNlNIRLS_MPjWnemWNA0BNsQB88fEXAEr1I5QTsftc_RaEx"
    },
    {
      "name": "ASWANG #61 - Saragnayan",
      "characterName": "Saragnayan",
      "type": "ASWANG",
      "typeCharId": 61,
      "description": "Saragnayan is the master of darkness from Visaya folklore. He is a powerful sorcerer that commands an endless army of malevolent spirits from his stronghold in the eternally dark lands of Gadlum. Saragnayan is the half-breed offspring of Primordial Chaos and an unknown mortal woman. Feared by all, he relishes in spellbinding good people into committing evil deeds. Saragnayan is said to be invulnerable to all weapons forged by man. His only weakness is his mortal heart - which is kept inside a wild pig that lives in a forest protected by powerful enchantments.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 36326816,
      "image_url": "https://lh3.googleusercontent.com/o11tTZozdoZKFZQ3ojrDo7pCwVUGGyKFf8RKDsopbz-n-FeldEBjplW6E7KnCNlb9GdJkH5grWlrv-M1qBaYpB6e0ua8vwAlz7xvF7I"
    },
    {
      "name": "ASWANG #60 - Manisilat",
      "characterName": "Manisilat",
      "type": "ASWANG",
      "typeCharId": 60,
      "description": "Manisilat is the goddess of broken marriages. She despises seeing happy couples and is determined to break apart any united family in her sight. Manisilat disguises herself as a healer or a beggar to gain entrance to the dwellings of her unsuspecting victims. Once inside, she uses sorcery and seduction to turn the husband and wife against each other. Her greatest moments of ecstasy are when she witnesses couples separating and leaving their shared home. Manisilat is one of the three agents of Sitan (the god of evil) - along with Mangangaway (the goddess of disease) and Hukluban (the goddess of death).\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 35946721,
      "image_url": "https://lh3.googleusercontent.com/pmBWikE5lqYm283vQJsLixVMRBlJS7SxJPUYChrOpZsZZt_mN8mPx9r1kU3NPOONRFdk8Kibbo8MxYrrMQNN98L6DrYrI-A4BLeL"
    },
    {
      "name": "MALIGNO #08 - Sagana",
      "characterName": "Sagana",
      "type": "MALIGNO",
      "typeCharId": 8,
      "description": "Sagana is a duwende treasure hunter. The middle child among the Duwende King's 81 daughters, Sagana grew frustrated with her life in the royal court and absconded from the Duwende Kingdom in search of a life of adventure. Together with Antukin (her trusty sigbin companion) Sagana scours the land of Sansinukob for ancient artifacts and relics. Unlike other treasure hunters who believe that their discoveries \"belong in a museum\", Sagana has no qualms about selling the objects she uncovers for massive profits. Her royal upbringing has made Sagana extremely skilled in the arts of speechcraft, barter, diplomacy, and subterfuge - this has allowed her to amass a fortune that rivals the wealth of the Duwende King himself. However, much to her chagrin, there remains one artifact that has eluded Sagana's grasp for years - a mysterious and elusive Agimat called \"The 10000X\".\n\nEditions: 1 of 1",
      "fusion": [
        "Duwendeng Pula",
        "Sigbin"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 35911152,
      "image_url": "https://lh3.googleusercontent.com/qMKeppnu616TnzX-56H6hInVkl_qWoWwycgXN4HpKNHUIG-f3FoqMS2O2apKAaYrC9AAPnXDUtanXIUU3B7AmfDSxt40GdjpiEktKw"
    },
    {
      "name": "ASWANG #59 - Onglo",
      "characterName": "Onglo",
      "type": "ASWANG",
      "typeCharId": 59,
      "description": "Onglo are massive ape-like creatures from Bikol folklore. Their elbows and knees are as hard as stone, and they use them to break open the clams that they gather from their swamp habitat for nourishment. Onglo are inherently brutish and violent. However, they spend most of their days sleeping. Only the most foolish and ignorant of mortals would dare to disturb a sleeping Onglo.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 35774750,
      "image_url": "https://lh3.googleusercontent.com/NHEQjqZpB_ahf9VM-3RJaeB8g9SUyP0emlBrCPCMUBTCscz4h8FCEb75UoNycsaBoW1zu94_72tXzgdXW8H4AjciDZDLqZiLPCt9IQ"
    },
    {
      "name": "ASWANG #58 - Markupo",
      "characterName": "Markupo",
      "type": "ASWANG",
      "typeCharId": 58,
      "description": "Markupo is a giant serpent from Hiligaynon folklore. Dwelling in the highest mountaintops of the province of Bulgas, the true nature of this majestic but terrifying creature remains an enigma to mortals. It sings a beautiful and hypnotic song, but its breath is a poison that is lethal to all humans, animals, and plant life. It is said that any beast touched by the shadow of the Markupo will instantly die.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 35216772,
      "image_url": "https://lh3.googleusercontent.com/kzJcJARvgvep9PKC96kM069PG-exZyk8Wbt1sxOg-pojln8sb073sgCP9rspQrYnIpQy8Ie9-sYrYVZQNifpsn2TyITSo3SiXcTWSQ"
    },
    {
      "name": "ASWANG #57 - Tiburones",
      "characterName": "Tiburones",
      "type": "ASWANG",
      "typeCharId": 57,
      "description": "Tiburones are giant flying sharks from Bikolano folklore. They have razor-sharp teeth and powerful jaws that can crush rocks. They circle their human prey from the sky before swooping in for the kill. In the Bikolano epic of Ibalong, the Tiburones were tamed by the mortal warrior-hero named Handiong.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 34905869,
      "image_url": "https://lh3.googleusercontent.com/GnsVrH2IEjTkyTJKbZuC9hRjJoaso8JP7qjfRhUxgzCj7xnhY_VUA6wbU78ZQnJidXFpXef5SeZTygn_vb-OWcXYq7oruH4-ktb3"
    },
    {
      "name": "ASWANG #56 - Tambal",
      "characterName": "Tambal",
      "type": "ASWANG",
      "typeCharId": 56,
      "description": "Tambal are Filipino doppelgängers. These forest-dwelling creatures can copy the appearance of mortals that are lost in the woods. They cause their victims to wander hopelessly in the wilderness for days, while returning to the human's home to take their place amongst family and friends. Tambal will do everything to remain in the mortal world. They will shower you with love and praise to maintain their facade. If you somehow uncover their true nature, they will not hesitate to kill.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 34722597,
      "image_url": "https://lh3.googleusercontent.com/HQW1wjOAihuys_MTYZ9wK8lSKqBf5UkNL7C7YKcRLJfn0CkIPhLM0X_UAefseIXYJaYDGOUZtBu9G6Jr82JolQNXOKH6YTtEHvk0440"
    },
    {
      "name": "ASWANG #55 - Biraddali",
      "characterName": "Biraddali",
      "type": "ASWANG",
      "typeCharId": 55,
      "description": "Biraddali are sky maidens from Tausug folklore. They are silver-winged beings that glow with a radiant and inhuman beauty. They use rainbows as a bridge to visit the mortal realm. Whenever a rainbow graces the sky, this is a sign that a flock of Biraddali are enjoying a bath in the cool waters of a mountain spring.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 34508746,
      "image_url": "https://lh3.googleusercontent.com/YPpZtmOx--miOP7iIhKTG7NABCbN7GoECyhOSOowDgW7pggnVqMV7sAOjfBcdQS--rqyxAODHuXJA2PmqQCrEQmgvJmB3dopUXM6Bw"
    },
    {
      "name": "ASWANG #54 - Alan",
      "characterName": "Alan",
      "type": "ASWANG",
      "typeCharId": 54,
      "description": "The Alan are bird-men from Tingguian folklore. Their skin is as tough as the hide of a carabao (water buffalo) and they live in golden houses deep inside dense forests. The Alan are territorial and cannibalistic. They violently devour any would-be thieves who dare to enter their colonies. However, they are also known to have a soft heart for children - raising mortal foundlings who have accidentally stumbled upon their domain or infants who have been left to die in the forest.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 34344755,
      "image_url": "https://lh3.googleusercontent.com/w-cm8RtvUkyEI8E--M8WN58evVkCuAkBOsb9oh6OKxhRU_gChCQDRTtj3bOssIJfxz4kO6iFLu47C3NY0ZCPcr_ypRPYSpPsngL8Lcs"
    },
    {
      "name": "ASWANG #53 - Habagat",
      "characterName": "Habagat",
      "type": "ASWANG",
      "typeCharId": 53,
      "description": "Habagat is the god of the southwest wind. Beautiful but arrogant, he is responsible for the rainy season and the devastating storms that come with it. Habagat shares dominion over the seasons with his sister, Amihan - the goddess of the northeast wind. Habagat and Amihan are forbidden to touch one another. If they do, the world will be destroyed.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 34126976,
      "image_url": "https://lh3.googleusercontent.com/4g96OUzDY_d58AUeT0vtjFVfts7rm8Wf9e6j6E2EJtNzs_W5DQ8cHTOlxMg1ZvD4Fbi4-RpCYS2LMrAZC6E21Ib1ApnHVb3-uFxs_w"
    },
    {
      "name": "ASWANG #52 - Amanikable",
      "characterName": "Amanikable",
      "type": "ASWANG",
      "typeCharId": 52,
      "description": "Amanikable is the god of hunters. A stern and bellicose deity, Amanikable holds a deep distaste for mortals. His anger towards mankind began when his love was spurned by Maganda - the first mortal woman. Amanikable is associated with the violence of the sea - its turbulent waves and horrible tempests. However, he is also known to bestow both titles and aid to men who have proven themselves worthy via their prowess in the hunt.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 33846901,
      "image_url": "https://lh3.googleusercontent.com/2V4sV_8d-d_-GXFGaPP8Q9OtbCqFoUim9jBIuK2YR4ToqS0gWgbMtStX5hDImTeh9IodeLABPDAmVLZujLJZT1j5GphJYw9hjRVP"
    },
    {
      "name": "ASWANG #51 - Lalahon",
      "characterName": "Lalahon",
      "type": "ASWANG",
      "typeCharId": 51,
      "description": "Lalahon is the goddess of volcanoes. She resides at Mount Kanlaon - the largest active volcano in the Visayas region. Lalahon is breathtakingly beautiful, but prone to bouts of calamitous anger and unspeakable cruelty. Nonetheless, she was beloved by her people - who venerated her with lavish harvest festivals full of worship and sacrifice. A common practice of Kanlaon's followers was to spill their finest \"Tuba\" (coconut wine) onto the earth so their exalted goddess could taste the bounty of her people.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 33662817,
      "image_url": "https://lh3.googleusercontent.com/B07Hu90U27LP00Uqn-wwJYkPCPLbHIv7zHRayv-D8bEZLQ4lOKVLqKnpCm4fZ-RueyFyNzcI5bl1yY4EXOdsaSpvjyOyRup9ol_I"
    },
    {
      "name": "MALIGNO #07 - Panaginip",
      "characterName": "Panaginip",
      "type": "MALIGNO",
      "typeCharId": 7,
      "description": "Panaginip is the god of dreams, stories, and the unconscious. Crippled and blinded as a child, Panaginip is the only deity who has never set foot outside of Kaluwalhatian. His only connection to the outer realms is via his scrying mirror - which he uses to visit the dreams of mortals to provide them with a boon, an omen, or a painful truth. Some say that this frail young man is actually the third incarnation of the dream god, while others say that he is the first.\n\nEditions: 1 of 1",
      "fusion": [
        "Bulan",
        "Sidapa"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 33524819,
      "image_url": "https://lh3.googleusercontent.com/k8Wmfg6J6HlXq3He7f8D5QZs9gET7JfoLFYOYYIxsngFyhXzk1At3IusCnTLemcf6XmmBzAxoH3s2Q9NRfBiyVnvuFlt13ZfTFXV"
    },
    {
      "name": "ASWANG #50 - Buwaya",
      "characterName": "Buwaya",
      "type": "ASWANG",
      "typeCharId": 50,
      "description": "Buwaya are saurians from Tagalog folklore. They live in deep-sea caves and have a coffin-like saddle growing on their backs. When a Buwaya captures a human, it locks the victim inside the saddle to carry them down to their underwater lairs. To the ancient Tagalogs, the Buwaya were considered sacred beings. The act of killing a Buwaya was punishable by death.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 33489967,
      "image_url": "https://lh3.googleusercontent.com/6TpLJJFtJK06PDjFvpuOiE37AvF0mHJXS3P4WOCDAAG9mcBF9dc0lAHmC8msChru65Fq830m-uzSMQsPKTlAqZyv2szP4tEAwdUpfT8"
    },
    {
      "name": "ASWANG #49 - Oryol",
      "characterName": "Oryol",
      "type": "ASWANG",
      "typeCharId": 49,
      "description": "Oryol is a demi-goddess from Bicolano folklore. She possesses inhuman beauty and strength, and has the ability to mesmerize both mortals and supernatural creatures with her alluring voice. In the Bicolano epic \"Ibalong\", Oryol commanded her legions of Magindara (mermaids) in battle against the human colonies and their hero, Handiong. Their battle ended in a truce, with Oryol and Handiong recognizing each others prowess in combat - and eventually, falling in love. Together, Oryol and Handiong ruled over the land and ushered in a golden age in Ibalong.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32813668,
      "image_url": "https://lh3.googleusercontent.com/467syLqeKzV86ptiIJtcQkMPDCaapuTWx5vM8ATY-ESfs3Md8SSolfKbRLZWyeb8hfeCFelAD1dwcGptugfMjcfZnSJpQ4wv8v893sM"
    },
    {
      "name": "ASWANG #48 - Hukluban",
      "characterName": "Hukluban",
      "type": "ASWANG",
      "typeCharId": 48,
      "description": "Hukluban is the goddess of Death. She can take any mortal's soul or destroy any village simply by raising her hand. Although Hukluban has the power to transform her appearance into anything she desires, her true form is that of a decrepit old woman. The word \"Hukluban\" itself means \"crone\" or \"hag\". She is one of the three agents of Sitan (the god of Evil), along with Mangangaway (the goddess of Disease) and Manisilat (the goddess of Broken Marriages).\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32686746,
      "image_url": "https://lh3.googleusercontent.com/RNb0iR6u-cgRq-Qf9ZqM-slkzMEVrqIZws6mN-kDM7q2ILo16o3plf8P7dJckIUw_ACepcCKOSkawBeG6FMwdVqz6WeyXfWOGGRzp0k"
    },
    {
      "name": "ASWANG #47 - Bulalakaw",
      "characterName": "Bulalakaw",
      "type": "ASWANG",
      "typeCharId": 47,
      "description": "Bulalakaw is the Visayan deity of pestilence. He was feared by mortals and worshipped and appeased by the Babaylan (shamans) to spare their communities from plagues and disasters. The word \"Bulalakaw\" means \"shooting star\". And it was commonly believed that when a shooting star appears in the sky, pestilence will follow.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32560149,
      "image_url": "https://lh3.googleusercontent.com/yrLV2mCQuru0YQIwaJD9gYTDMSfPv9TfAxVQJgaZ51-iMFg3N2lSztQFnFIRksvibEwfcc8zJQY2yzsy2kfMrUEXX3W5KM_dq6C5_6A"
    },
    {
      "name": "ASWANG #46 - Batibat",
      "characterName": "Batibat",
      "type": "ASWANG",
      "typeCharId": 46,
      "description": "The Batibat are vengeful spirits from Ilocano folklore. They reside in trees and take the form of ancient, morbidly-obese female demons. If a Batibat's tree is felled and turned into a post for a house, the creature will migrate to that post and become an unwelcome (and permanent) guest. The Batibat will attack any person that unwittingly sleeps near the infested post by sitting on their chest. The victim's dreamspace will be repeatedly invaded and they will suffer from sleep paralysis, waking nightmares, suffocation, and - ultimately - death.",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32403709,
      "image_url": "https://lh3.googleusercontent.com/TjQC_zF6mZTpHaqK68egRLg64v33weFIpD1cHVwR2NjYySjWe21g-Nr3shwFTKxUHLo7tD8mLk6r43jF9Z8UYv4pv4G7ZB-FlaTN"
    },
    {
      "name": "ASWANG #45 - Maria Cacao",
      "characterName": "Maria Cacao",
      "type": "ASWANG",
      "typeCharId": 45,
      "description": "Maria Cacao is the Diwata (mountain goddess) that resides at Mount Lantoy in Cebu. All of the cacao trees in this sacred mountain are part of her plantation. Whenever there is a flood in the adjacent rivers, this is a sign that Maria Cacao is traveling down the mountain aboard her golden ship to sell her crops to the townsfolk below. If a person loans a cacao crop from her and fails to pay it back, it is said that Maria Cacao will ride downriver once more to harvest the impudent mortal's soul.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32298163,
      "image_url": "https://lh3.googleusercontent.com/6_AuOY6jMUeUZnJXk9ib1VrT5LLVVEjWMpsZhvcb9mJ33-98yHe9mu99CApll85QsFMrUyLbyU57MJKPbuSaBpPCA1VVkhctgK8X"
    },
    {
      "name": "ASWANG #44 - Bingil",
      "characterName": "Bingil",
      "type": "ASWANG",
      "typeCharId": 44,
      "description": "The Bingil is a plague-bringing demon from Gaddang folklore. Her skin oozes with old wounds and pus, and she reeks of rotting flesh. Any village that is unfortunate enough to be visited by her will suffer from calamitous deaths and incurable illnesses. The Bingil cannot be banished by any mortal means, and the only way to appease her is with a blood sacrifice.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32181334,
      "image_url": "https://lh3.googleusercontent.com/BvYIZvJwCfZv5oDsF0EE2g9Q6BDOdktCJ8Epx02amDfMqam0hd7bdtxuQGcRLrk8kCwRuEL0Rl5uu3mVbJwYvN8FcBnHSugQ41EtI64"
    },
    {
      "name": "ASWANG #43 - Tambanokano",
      "characterName": "Tambanokano",
      "type": "ASWANG",
      "typeCharId": 43,
      "description": "Tambanokano is a giant crab from Mandaya folklore. She is so powerful that lightning erupts from the heavens every time she blinks. Her movement causes great tidal waves and devastating earthquakes. An irritable and quarrelsome creature, Tambanokano often gets so angry that she attempts to swallow the moon.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 32065451,
      "image_url": "https://lh3.googleusercontent.com/s-jFJtYXhIeDcui787UNj7qzaI5L5nAHg2uNSYn3DsEL89H9HVYCv1sIapfKbnil84C4buEOS16mOCdDrmAwFwyv0pI2MS9BxWz0cA"
    },
    {
      "name": "MALIGNO #06 - Kulog",
      "characterName": "Kulog",
      "type": "MALIGNO",
      "typeCharId": 6,
      "description": "Kulog are lightning elementals that take the form of beautiful women. Mysterious and elusive, they can only be seen during a surging thunderstorm. Kulog are quite mercurial, and are known to either lead helpless mortals to their safety, or toy with them as they struggle to withstand the storm. Kulog are often disparagingly called \"Sky Mermaids\".\n\nKulog was created in the Basilica by fusing Kimat and Tala.\n\nEditions: 1 of 1",
      "fusion": [
        "Kimat",
        "Tala"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31974845,
      "image_url": "https://lh3.googleusercontent.com/I9u7GgknupzhTv5vUdbMckZ2uizFKnrurFOfFLq9kPCOPyeb7rBSo43chXpo3g9IVSX5r9ah7cAV4x3K5kBxNOoaSQIxEq-PYPw-jGA"
    },
    {
      "name": "ASWANG #42 - Lidagat",
      "characterName": "Lidagat",
      "type": "ASWANG",
      "typeCharId": 42,
      "description": "Lidagat was the goddess of the waters. She could command the tides and had dominion over the seas. She fell in love with Lihangin - the god of the wind. And together, their tender love quelled the fierce and deadly rivalry between their feuding clans.  When Lihangin unexpectedly passed away, Lidagat slowly withered, and died of a broken heart. From her body sprang the fish, the merfolk, and all of the marine life found in the world's oceans.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31953684,
      "image_url": "https://lh3.googleusercontent.com/ipBIVBB_rmXyjffSaG4LUi1mw9uKae2ROCiMNqJTJLL9GDrAUGp-llQscyZ5MFBL2jucXEVCktvHHQYmxVbnb4bOLVpO0HVmaxlxqV4"
    },
    {
      "name": "ASWANG #41 - Kaperosa",
      "characterName": "Kaperosa",
      "type": "ASWANG",
      "typeCharId": 41,
      "description": "Also known as the \"White Lady\", Kaperosa are faceless female ghosts clad in flowing white robes. They are the restless souls of murdered women who have returned to the mortal realm to seek revenge. Tales of the Kaperosa are ubiquitous - spanning eras and locales - and their stories often involve themes of betrayal, suicide, and unrequited love. The most famous Kaperosa in Filipino folklore are the \"White Lady of Loakan Road\" and the \"White Lady of Balete Drive\".\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31839014,
      "image_url": "https://lh3.googleusercontent.com/VWpkxa5UvBECfALdr1QAXoF8e4G-r79O1RhooWYSPqLY80R3LW4oPUWutRnw6Fx6rEV8o8gJytxS1vI2y0XLhbqDBg1jonzy7gP90w"
    },
    {
      "name": "ASWANG #40 - Lampong",
      "characterName": "Lampong",
      "type": "ASWANG",
      "typeCharId": 40,
      "description": "Lampong is a shape-shifting dwarf from Ilongot folklore. He is known as the guardian of wild deer. He has the ability to transform himself into a conspicuous-looking deer in order to divert the attention of hunters. Invulnerable to arrows and gunfire, he absorbs all of the deadly shots meant for the creatures in his forest. After the sixth shot is cast, Lampong removes his disguise, reveals his true form, and curses the violators of his domain with an incurable ailment.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31691928,
      "image_url": "https://lh3.googleusercontent.com/bGrFhwLcjegE4iDmkSy3PJiCGS2POxSgtdJi3HaBpUkFUJiKPS7oplM34DajWyf3LsE6lvNVJ9OR6oeHk_jF6KA4ThV8XwDIC_MBxQ"
    },
    {
      "name": "ASWANG #39 - Makanduk",
      "characterName": "Makanduk",
      "type": "ASWANG",
      "typeCharId": 39,
      "description": "Makanduk is the God of Plunder. He is the patron deity of sea bandits and pirates. Not much is still known about this mysterious deity. His sigils, signs, and the prayers of his devotees have been lost to the waves of time. Ancient Visayan warriors worshipped Makanduk along with their two other gods of battle: Barangaw - the God of The Rainbow, and Ynaguinid - the Goddess of War.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31563352,
      "image_url": "https://lh3.googleusercontent.com/CWpjz0uYzUqF7TsWNTcqJJcH-RH7CJeiPj5zR5yN_rOoXLf2GM5vnlFZt28PReOAZfYpPlj-bmoYiHtn8Gmq0ZarhNgSccV-AEhn"
    },
    {
      "name": "MALIGNO #05 - Dimalapitan",
      "characterName": "Dimalapitan",
      "type": "MALIGNO",
      "typeCharId": 5,
      "description": "Unlike the other members of his pacifist clan, the rage-fueled warrior Dimalapitan is the result of a union between a proud Sarangay and a violent Kurita. Shunned by his brethren for his gruesome deformity, Dimalapitan roams the land of Sansinukob in search of pillage, plunder, and the glory of battle. And although he stands at a massive 10 feet tall, it is said that Dimalapitan is only 14 years of age. In foreign lands, there are whispered prophecies that say that this tempestuous, hulking warrior will usher in an age called \"The Golden Bullrun\".\n\nDimalapitan was created in the Basilica by fusing Sarangay and Kurita.\n\nEditions: 1 of 1",
      "fusion": [
        "Sarangay",
        "Kurita"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31536476,
      "image_url": "https://lh3.googleusercontent.com/1_vaqsexOGiRLH7hSndE2zepQOwVMfLgnsmCBfbGuiELMAFbEK_mWMp3sE-XodE4N1ig6CLfWrhtWyl48frCD4NJ60y1qgBDvV3ZLA"
    },
    {
      "name": "ASWANG #38 - Mayari",
      "characterName": "Mayari",
      "type": "ASWANG",
      "typeCharId": 38,
      "description": "Mayari is the one-eyed Goddess of the Moon. She embodies beauty and strength and is the patron deity of combat, war, and revolution. She is the eldest daughter of Bathala and is known as the most beautiful goddess in the heavenly court. When Bathala fell into a deep slumber, Mayari fought her brother, Apolaki (the God of the Sun), for dominion over the Earth. Their fierce battle ended when Mayari lost one eye. Thus, the sibling war gods formed a truce, with Apolaki ruling the day, and Mayari ruling the night.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31452876,
      "image_url": "https://lh3.googleusercontent.com/KKsrrABs938ohkB_MDPnQCqKIpxDrRfq7JiTsCadu868VtB8kRuR5bAlmXj__U89CLNrM2l0Co1nYZ15GMUA86XJOpAnu3L3IC7FCD4"
    },
    {
      "name": "ASWANG #37 - Pirotso",
      "characterName": "Pirotso",
      "type": "ASWANG",
      "typeCharId": 37,
      "description": "Pirotso are child-eating monsters that disguise themselves as cooking pots. These strange creatures from Bikolano folklore are said to visit children who go to sleep without eating dinner. The Pirotso grab these naughty children and place them inside their pot-like bodies, never to be seen again.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31333108,
      "image_url": "https://lh3.googleusercontent.com/b7YYcN5QSfdKPZKjTsEBVIcVw9surhz0IhqC1MJO2awzXtqTStJTCFTqWNde7W4ErdvVTgUYvYxNqW4nWJVJZUslw-QU7ofLhAqKDEg"
    },
    {
      "name": "MALIGNO #04 - Makisig",
      "characterName": "Makisig",
      "type": "MALIGNO",
      "typeCharId": 4,
      "description": "Makisig is a warrior tiyanak. He is the adopted son of the God of War - Apolaki. Apolaki rescued Makisig as a baby and brought him to Kaluwalhatian to raise as his own son. But, once Makisig came of age, the God of War suddenly and inexplicably banished the boy to the realm of Sansinukob. Alone and unguided, Makisig viciously fights his way through Sansinukob in search for a way back to Kaluwalhatian. What does Makisig desire? To prove himself to the War God? To return to his beloved homeland? Or does he simply seek vengeance on the capricious father that spurned and abandoned him?\n\nMakisig was created in the Basilica by fusing Tiyanak and Apolaki.\n\nEditions: 1 of 1",
      "fusion": [
        "Tiyanak",
        "Apolaki"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31331132,
      "image_url": "https://lh3.googleusercontent.com/MLOLXSdy9mEC7yCyoyuvrkEqEYu7ELsIuy5YKYcsdMtU2D_X7H5rxzVAGn6GSQUFqBsVSsd7sC3F0mE-DOYhmL-u9hgIw6UBMtqsTw"
    },
    {
      "name": "ASWANG #36 - Lakapati",
      "characterName": "Lakapati",
      "type": "ASWANG",
      "typeCharId": 36,
      "description": "Lakapati is the Tagalog deity of fertility. She brings the gifts of fertile fields and crops during harvest time and protects farm animals from coming to any harm. Lakapati is a hermaphrodite, possessing both male and female genitalia. She is known to the Tagalogs as their kindest deity, and her name literally means \"giver of food\".\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31235130,
      "image_url": "https://lh3.googleusercontent.com/_MkI_fIoEdI13Ingocl_2F8CiVgDrFs3b2WK_v0KY4ntSwokgpidH1A_YvMZ0FsCMluYefd4ifJXiTWvTQCy7wA29CqPx0oUT5l2Ww"
    },
    {
      "name": "MALIGNO #03 - Kapugot",
      "characterName": "Kapugot",
      "type": "MALIGNO",
      "typeCharId": 3,
      "description": "The Kapugot is a foreign entity that came to Sansinukob from a land to the north. Some say that it is actually two creatures - with the head and the body forming a symbiotic bond but having separate minds of their own. Others say that the head is actually a parasite that has captured and transformed a helpless Pugot to aid it in its schemes. No one has seen the Kapugot's true form. Though it sometimes speaks in the language of the Yamato.\n\nKapugot was created in the Basilica by fusing Pugot and Kapre.\n\nEditions: 1 of 1",
      "fusion": [
        "Pugot",
        "Kapre"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31234527,
      "image_url": "https://lh3.googleusercontent.com/H7XgcodSsTDL1znp1DC5dAw3F9yMGv49dBjYAthThVDPN1ZQweYlWC6NOd7XKm_oXxZgRHQAwaUbQDP7Nu1Wnncm31Wth1sm21CCbg"
    },
    {
      "name": "ASWANG #35 - Duwendeng Itim",
      "characterName": "Duwendeng Itim",
      "type": "ASWANG",
      "typeCharId": 35,
      "description": "Duwendeng Itim (Black Dwarves) are tiny, malevolent forest spirits. They are easily offended and are known to kidnap the children of the offending human as punishment for their perceived slights. They lure their young victims by promising to give them their hearts desire. Once the child agrees, they become forever trapped inside the underground domicile of the vengeful Duwendeng Itim.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31123661,
      "image_url": "https://lh3.googleusercontent.com/mHR7910xA61-gm0pklkcb8S-qG6lH5eKYw4EqcW-TSN89Wgu0xd67SkD-BN2oG2v2Ru9SKmljeKFBQ_IxmvbfOqKxU5QRK7jc76h"
    },
    {
      "name": "MALIGNO #02 - Duwendeng Apoy",
      "characterName": "Duwendeng Apoy",
      "type": "MALIGNO",
      "typeCharId": 2,
      "description": "Duwendeng Apoy (Fire Dwarves) are the messengers between the Engkanto Enclave and the Duwende Kingdom. Catching a glimpse of them brings extremely good luck, but interrupting their work results in grave consequences.\n\nDuwendeng Apoy were created in the Basilica by fusing Duwendeng Puti and Burulakaw.\n\nEditions: 1 of 1",
      "fusion": [
        "Duwendeng Puti",
        "Burulakaw"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31066702,
      "image_url": "https://lh3.googleusercontent.com/xfRIyX-E2x5poBcfM6UcwwZv-NLvCIslvLUeu_CCZzUoRq_3CyAHm4JFg7r6GRzor63o7UHXE9oCTHIo2Ke1vk_nazkt9S_fwcfvtw"
    },
    {
      "name": "ASWANG #34 - Santelmo",
      "characterName": "Santelmo",
      "type": "ASWANG",
      "typeCharId": 34,
      "description": "Santelmo are fire elementals from Tagalog folklore. Some say that they are the benevolent messengers of Tala - the goddess of the stars. While others insist that they are malevolent entities seeking vengeance - formed when the dried blood of a murdered innocent mixes with rain from the sky. The truth may lie somewhere in between.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 31020914,
      "image_url": "https://lh3.googleusercontent.com/Utj3uvRgPILdxw_XfgeNq63u3zZ07ohFtZb4c7E1dcFQCKoGFns6QvAZYUA54iSftui3sw5qeE5GjfWhYufcTsYFj3xn6DgegylvoA"
    },
    {
      "name": "MALIGNO #01 - Tahal",
      "characterName": "Tahal",
      "type": "MALIGNO",
      "typeCharId": 1,
      "description": "Tahal are flesh-eating, bat-winged forest creatures from the world of Sansinukob. They eat the corpses of animals who have died in their forest domain as a way of returning them back to nature. \n\nTahal were the first Maligno to appear in Sansinukob. They were created in the Basilica by fusing Tahamaling and Bal-Bal.\n\nEditions: 1 of 1",
      "fusion": [
        "Tahamaling",
        "Bal-Bal"
      ],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30990143,
      "image_url": "https://lh3.googleusercontent.com/EjjPgK1O0gS_23sEiY7VMTXJVkEsZ0kvnzQjZuG-6BdtF_KG1IJq98sKh9AugP5CVhZ9p_n5xmJ0xo2EJEe-G_RRVpxfRJGy7pzEpns"
    },
    {
      "name": "ASWANG #33 - Hanan",
      "characterName": "Hanan",
      "type": "ASWANG",
      "typeCharId": 33,
      "description": "Hanan is the goddess of the morning. She represents new beginnings in life. People offer her solemn prayers during births, deaths, and the start of a new harvest season. These prayers are only conducted during sunrise. Hanan is the youngest daughter of Bathala (the supreme deity of the Tagalogs). Her sisters are Mayari - the goddess of the moon - and Tala - the goddess of the stars.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30905183,
      "image_url": "https://lh3.googleusercontent.com/sCn8h6bIgSeGpsxR8mI9kXS1Revpe_jLj7iId7itG7QbMId-VvsTowMsAW_VghjTvzJK7txPmbF-rvY39SXWrZyc-NPjrHTXbfb2vEQ"
    },
    {
      "name": "ASWANG #32 - Babaylan",
      "characterName": "Babaylan",
      "type": "ASWANG",
      "typeCharId": 32,
      "description": "The Babaylan are the shamans of the Philippines. They are adept in communicating with the dead and harnessing the spirits of nature. The revered role of a Babaylan is traditionally reserved for women or feminized men. They performed a crucial role in their communities during the pre-Hispanic era, serving their clansmen by specializing in the arts of healing, herbalism, divination, and sorcery.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30807431,
      "image_url": "https://lh3.googleusercontent.com/OpKqPdxAjgk3UXgBDP84YjVeY9Xi38axl7t4c0lR6knAD700hiTKJYCM2WjQfNNebTOaozJunG89AnkwdXVfpdT3eZmnRVxxS6DAxw"
    },
    {
      "name": "ASWANG #31 - Apolaki",
      "characterName": "Apolaki",
      "type": "ASWANG",
      "typeCharId": 31,
      "description": "Apolaki is the god of War and the Sun. He is the son of Bathala (the supreme deity of the Tagalogs) and the patron of all fighters and warriors. It is said that when Bathala went into a deep slumber, Apolaki fought his sister Mayari (the goddess of the Moon) for dominion over the Earth. Their battle resulted in a truce after Apolaki blinded Mayari in one eye. And so they decided to divide their rule, with Mayari ruling the night and Apolaki ruling the day.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30732076,
      "image_url": "https://lh3.googleusercontent.com/bdtmRVgVj0g7suebLBqb1VDS_A-L1ol2ecaGz-UwW7zDNsx-yfhnvTLCf2GyRC6Aj-iIO98rZEUHpWVjzu1lA9swoT6vEhxoEpmo"
    },
    {
      "name": "ASWANG #30 - Tiyanak",
      "characterName": "Tiyanak",
      "type": "ASWANG",
      "typeCharId": 30,
      "description": "Tiyanak are infant-like creatures that eat human flesh. They are said to be the reanimated souls of aborted children that have returned to the mortal realm to seek revenge. Most Tiyanak are said to live in forests. Upon seeing a human, they transform into what looks like a normal, helpless baby in order to attract their prey.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30639516,
      "image_url": "https://lh3.googleusercontent.com/HKiUoAtdny9IOhGah46s5iQCHsgamIRMKspIdAQ21eDlvwdyKotxOChbpUrNYHINWNg-Qcwcf3fo-cawxMOCoDTgAEB6OMAzta8HQg"
    },
    {
      "name": "ASWANG #29 - Sidapa",
      "characterName": "Sidapa",
      "type": "ASWANG",
      "typeCharId": 29,
      "description": "Sidapa is the god of death from Visaya folklore. Handsome and cunning, he lives in Mount Madia-as and determines the day of every person's death by marking their lifespan on a sacred tree. Some modern depictions of Sidapa portray him as the lover of Bulan - the Bikolano god of the moon.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30544818,
      "image_url": "https://lh3.googleusercontent.com/iOH-rbHC_Drnun5fpl_Qu1skH1yKPB7G63Ay3qSfnDcDWeZsQoCIckvxAgOut00H62WwYZ-cdMohAX1Zb3-lhFrBuMBrqf4xCqAUlw"
    },
    {
      "name": "ASWANG #28 - Bulan",
      "characterName": "Bulan",
      "type": "ASWANG",
      "typeCharId": 28,
      "description": "Bulan is the fairest son of Dagat (the sea) and Paros (the wind) from Bikolano folklore. Beautiful and docile, Bulan was loved by all. Upon his death, he became the Moon. Some modern depictions of Bulan portray him as the consort of Sidapa - the Visayan God of Death.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30450418,
      "image_url": "https://lh3.googleusercontent.com/RYYBtc-b5AYjUseaz4uARb5GGUBKE4Wns3LJm9yWiyf6KquAIX4VLXuYankvgFGisfYiNnva5Jx3tQLqR2UX44Hygx0NJ9FIN0klPA"
    },
    {
      "name": "ASWANG #27 - Maria Makiling",
      "characterName": "Maria Makiling",
      "type": "ASWANG",
      "typeCharId": 27,
      "description": "Maria Makiling is the Diwata (mountain goddess) that resides at Mount Makiling in Laguna. She is the guardian spirit of the mountain - sent by Bathala to protect its bounty and aid the nearby townsfolk in their everyday life. In pre-colonial times, Maria Makiling was known as the goddess of love, conception, and childbirth - Dayang Masalanta.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30450391,
      "image_url": "https://lh3.googleusercontent.com/QnGqo7NCHxGCcaItOZFRoXGf-DM8SS7RqvdRAdG0Znuw24WJJgM2qjI7aerGesL14SLRVy2so94J-d7nkl9gwLCG97udIypDeyhhZg"
    },
    {
      "name": "ASWANG #26 - Bakunawa",
      "characterName": "Bakunawa",
      "type": "ASWANG",
      "typeCharId": 26,
      "description": "Bakunawa was once a beautiful and proud goddess who lived in the sea. But the beauty of the moon eclipsed hers, so she vowed to posses it. For her arrogance and greed, she was cursed to lose her beauty forever and transform into a gigantic, serpent-like being. In her monstrous form, Bakunawa is said to consume the moon and cause lunar eclipses.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30450325,
      "image_url": "https://lh3.googleusercontent.com/ZBua4KGMGGH0k45nHZLmZri3o2fQ1c9J-Sivlqbb58o2QMfej8_sI2kmyVD3xjuAeszlLh5nGG6VjX0NpZ1BK4bJGkB4UmeBZDSgSF4"
    },
    {
      "name": "ASWANG #25 - Calanget",
      "characterName": "Calanget",
      "type": "ASWANG",
      "typeCharId": 25,
      "description": "Calanget are small earth spirits from Gaddang folklore. They live inside the ground and make a whizzing sound when responding to the call of a Babaylan (sorcerer). Some regard the Calanget as the true owners of the land, they are known to inflict harm on those who disturb their underground homes.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30450196,
      "image_url": "https://lh3.googleusercontent.com/4Wc6BE-1sVYmUAarQ5YZkuceVqSEeNsDFSLkb0Ho_T1dXpoUrzXpa4zC-uVCpW7NUlTQ2yfxXURhwpB_VZAbVen4zy8ajEqSETRKvw"
    },
    {
      "name": "ASWANG #24 - Pilipit",
      "characterName": "Pilipit",
      "type": "ASWANG",
      "typeCharId": 24,
      "description": "Pilipit is a mysterious cat goddess from Tagalog folklore. Not much is known about this long lost, enigmatic deity. But it is said that she was once worshipped through statuettes in the form of a cat. Prayers and solemn oaths were made in Pilipit's presence before the arrival of the colonizers.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30295683,
      "image_url": "https://lh3.googleusercontent.com/_56ZUpJAMhz193Wchh23Z8m_wRGMwNoxyVGJoBsPQwic6WBdotDBYKj2ramZHrawOm-oMVKaNX_Fe97PkjYLiLeLygtR784PFgOemX0"
    },
    {
      "name": "ASWANG #23 - Tala",
      "characterName": "Tala",
      "type": "ASWANG",
      "typeCharId": 23,
      "description": "Tala is the goddess of the stars. She created the Tagalog constellations and is known to send her messengers - the Santelmo - to guide fishermen to safety at night. Tala is the second daughter of Bathala. Her sisters are Mayari (the goddess of the moon) and Hanan (the goddess of the morning).\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30295615,
      "image_url": "https://lh3.googleusercontent.com/ti5tvfWxu9GMGDhLttfr-dyj0x2-DwTJQywcQ3VcNCCB2_5GwufaPat63B-T3pJDALibn-4cjawpOKSZUVVnN2huSnFtXRr7kuMd_A"
    },
    {
      "name": "ASWANG #22 - Siyokoy",
      "characterName": "Siyokoy",
      "type": "ASWANG",
      "typeCharId": 22,
      "description": "Siyokoy are sea-dwelling humanoid creatures with green, scaly skin, webbed limbs and fins. In contrast to the Sirena, Siyokoy are more animalistic in physical form and structure. They drown mortals for food and can usually be seen swimming with eels, octopi, and other sea creatures.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30295498,
      "image_url": "https://lh3.googleusercontent.com/gjPX-7CYHm7Nz-Bbi8DwGTH7do_eNG-hJaTofxWc6R4x5JD3MgBFcHwTChCIPTPlbL3gS287FNcFAY5EGybyLdBJZfHFttTaUz0T"
    },
    {
      "name": "ASWANG #21 - Bulawan",
      "characterName": "Bulawan",
      "type": "ASWANG",
      "typeCharId": 21,
      "description": "Bulawan is the goddess of Greed and Vengeance. She is the patron deity of metalsmiths, miners, and jewelry-makers. She has a luminous aura that no man can resist and her touch can transform anything into gold. While Bulawan is capable of bestowing great wealth, she is also known for imposing extremely cruel punishments on the greedy - making her a deity that was both venerated and feared by the ancient Visayans.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30295403,
      "image_url": "https://lh3.googleusercontent.com/qMU0Ok2qnTdfEuB4iD0ZsHPO-psifgjfptcdv2cMWfYU3nYnKEsWRse9pOimVt24ritxz1MbSTW7w8KB2rObLoG9onvGW6gdaCrh"
    },
    {
      "name": "ASWANG #20 - Manlalayog",
      "characterName": "Manlalayog",
      "type": "ASWANG",
      "typeCharId": 20,
      "description": "Manlalayog are creatures covered with hair from head to toe. They kill their prey by forcing their hair into all of the orifices of their victim’s bodies. The victim’s life force is drained as the person suffocates and dies - giving the Manlalayog inhuman strength and limitless youth.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30222986,
      "image_url": "https://lh3.googleusercontent.com/co9fHNeX68VvY6ZSGvmsY4c5egKbRg8dd02vzS4rU3j7T2wK4-_ImfcxJmsCkPO5Q8oDITNgmSfoaUBIDcJzL-CTofB9KYm1xa4u_w"
    },
    {
      "name": "ASWANG #19 - Gawigawen",
      "characterName": "Gawigawen",
      "type": "ASWANG",
      "typeCharId": 19,
      "description": "Gawigawen are six-headed giants. Standing more than 18 feet tall and weighing 6000 pounds, these titans from Tingguian folklore wield massive weapons of war. Although Gawigawen have six heads, they actually only have one brain - stored inside the large humps on their backs.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30222919,
      "image_url": "https://lh3.googleusercontent.com/8ojofFcR6Xvyi0oRbJCVKIzSxGnlK-xo6VDJO9P3J4z7BaRmaqXYQgE4YC3K6q7aNGNCT2VoNSqE_Fi6q1CDG1wzKhcqMwrHIYQM"
    },
    {
      "name": "ASWANG #18 - Kurita",
      "characterName": "Kurita",
      "type": "ASWANG",
      "typeCharId": 18,
      "description": "Kurita are insatiable many-limbed entities. These creatures from Maguindanao folklore are said to inhabit both land and sea, but prefer to live in mountainous areas filled with rattan trees. They devour everything in sight and bring chaos and destruction wherever they go.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30222663,
      "image_url": "https://lh3.googleusercontent.com/uZ4jS7aGJatC5fmZKxaSVMAiHJX4LvL6wQ9icPuqGOTkxux5iVzk94Pentrbv3ny2mxvJNxCtgPLuChPMCJ75gWI2UvGQLwLWqmU"
    },
    {
      "name": "ASWANG #17 - Kimat",
      "characterName": "Kimat",
      "type": "ASWANG",
      "typeCharId": 17,
      "description": "Kimat are lightning elementals that take the form of hounds. These creatures from Tinguian folklore are said to bring storms wherever they go. The Kimat are the messengers of the Thunder Gods.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30222384,
      "image_url": "https://lh3.googleusercontent.com/qh4QJzhB8G-ttjdrOi4HwTm0tPsJgCdOLGb3o_GWIUlT57zpMCQ8qkQ6Ylihfyd7TlzVE4XObxJifbGxlspeQUSYnTIyqQfmqQyNl4E"
    },
    {
      "name": "ASWANG #16 - Tikbalang",
      "characterName": "Tikbalang",
      "type": "ASWANG",
      "typeCharId": 16,
      "description": "Tikbalang are humanoid creatures with the body of a man and the head of a horse. They take pride in their speed and enjoy challenging humans to races. It is possible to tame a Tikbalang by plucking three strands of hair from its mane. If you succeed in doing so without being devoured, the Tikbalang will become your lifelong servant.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30111440,
      "image_url": "https://lh3.googleusercontent.com/gjsyT3ZRm1HoFCR3gcFYy4B-Y_yf3iqi0S9yUlonzOKIHhYH0pnWuEIxwCP4MlfATeiu17a5mntgUB3j4JqPy7C32RP4AKX605ry"
    },
    {
      "name": "ASWANG #15 - Sirena",
      "characterName": "Sirena",
      "type": "ASWANG",
      "typeCharId": 15,
      "description": "Sirena are Filipino mermaids. In the Bicol and Visayas regions, they are also known as the \"Magindara\". Sirena have beautiful and enchanting voices that can attract and hypnotize fishermen - distracting them from their work and causing them to drown or cause shipwrecks.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30111351,
      "image_url": "https://lh3.googleusercontent.com/WvvHaLOyc4rSDGlTBlFzKZ6_xfc-6SQsz4n1D-pBrCNjiFP0FgKw6jA2ycAkrZVTGH9j6NJ85TLl13zCQay9J-iu9D2aQizfWj-7Yw"
    },
    {
      "name": "ASWANG #14 - Tigbanua",
      "characterName": "Tigbanua",
      "type": "ASWANG",
      "typeCharId": 14,
      "description": "Tigbanua are one-eyed ogres from Bagobo folklore. They are said to hunt in packs and live in caves inside jungles. Tigbanua packs make quick work of their prey by tearing at them with their sharp claws. However, they are known to have a morbid and ironic fear of dogs.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30111274,
      "image_url": "https://lh3.googleusercontent.com/2QJSQXakpYNUDcm3qHDAorMkWky1bhKEKIlrF73qOIyjCHIV_V3jboJ4MB18cnT4U1N-i6UE6x334q5d7vu_E8cJ4kH9yA-5LdFM"
    },
    {
      "name": "ASWANG #13 - Burulakaw",
      "characterName": "Burulakaw",
      "type": "ASWANG",
      "typeCharId": 13,
      "description": "Burulakaw are mysterious entities that look like beautiful women with long, flaming hair. Barely three feet tall, they appear in a sudden flash and fly in the air like meteors. Some say that the Burulakaw are messengers of the Engkanto and Diwata.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30111220,
      "image_url": "https://lh3.googleusercontent.com/qPAcc4ZGKgAbgfAC3BfHqjcfdYK__A7StRjYaxe9IgXH04UtmevF0w2aQOElLQ7pkujd7Hi8G78cih6OKoKfQBRe2HmR9Vhfn6ERdPw"
    },
    {
      "name": "ASWANG #12 - Nuno sa Punso",
      "characterName": "Nuno sa Punso",
      "type": "ASWANG",
      "typeCharId": 12,
      "description": "Nuno sa Punso are goblins who live inside anthills. They are easily angered and will always seek vengeance on humans who disturb their mounds. A Filipino custom is to say the phrase \"Tabi-tabi po\" when passing by an anthill to avoid being cursed by an angry Nuno. Nuno curses are ailments that cannot be cured by modern medicine and will often result in death.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30111086,
      "image_url": "https://lh3.googleusercontent.com/YMsSHs9CNpBE--3wIVMGDSMBUNjtx3Ki_2GbJ5cfVqrRBmEo0p_JiWH2SrmscAUOsol1QMp-tEu4LwoCSyaHJ5SpqtoczzgwL6RhEA"
    },
    {
      "name": "ASWANG #11 - Duwendeng Pula",
      "characterName": "Duwendeng Pula",
      "type": "ASWANG",
      "typeCharId": 11,
      "description": "Duwendeng Pula (Red Dwarves) are small forest spirits. Cold, temperamental, and fond of telling lies, these creatures are known to help desperate humans in need - at a price. They are easy to summon but difficult to get rid of. The consequence of displeasing a Duwendeng Pula is the death of a family member.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30110946,
      "image_url": "https://lh3.googleusercontent.com/vZSmycUjcrn_LSl4Zmxz6cLX2QtDLMAb6D2W2bI6vRvgCKok3f2xdMz2kaJ0rPh8SF1ZQm4V21trUOg80RPk4MuOT6yPJnnUff5g0g"
    },
    {
      "name": "ASWANG #10 - Bungisngis",
      "characterName": "Bungisngis",
      "type": "ASWANG",
      "typeCharId": 10,
      "description": "Bungisngis are one-eyed forest giants. They are the Filipino counterpart of the Greek Cyclops. Standing over ten feet tall, these creatures possess immense strength - more than enough to overpower a Carabao. Bungisngis are constantly laughing and enjoy bullying forest animals to steal their food. They are, however, extremely dimwitted and can easily be tricked.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30110802,
      "image_url": "https://lh3.googleusercontent.com/IUJE9AoZCCzQmLo_JMK8PP8H5amzB3ScY6bIux2CmKHSoPVCtN6t3bLgNlenUOoMUUiXI7EJmPm3JO6-G7EGsp_BtWnx_usOosH0"
    },
    {
      "name": "ASWANG #09 - Berberoka",
      "characterName": "Berberoka",
      "type": "ASWANG",
      "typeCharId": 9,
      "description": "Berberoka are ogre-like swamp creatures. They can change their size at will by absorbing water into their bodies to grow immensely in size. They use this ability to create traps for unwary fishermen (who they often prefer to eat alive). The rapacious Berberoka only have one weakness - their morbid, ironic fear of crabs.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30110075,
      "image_url": "https://lh3.googleusercontent.com/kUcuWG-tMZIE3d4CiBdavnrLxk_6MMihF5lw_dDWUEicoIFZXyJp_w8uVjUvtMGubNmXrB2I6hDTvYHg_XvJjNaXPKz3556QS_LnBQ"
    },
    {
      "name": "ASWANG #08 - Duwendeng Puti",
      "characterName": "Duwendeng Puti",
      "type": "ASWANG",
      "typeCharId": 8,
      "description": "Duwendeng Puti (White Dwarves) are tiny earth spirits. Usually benevolent, they bring good fortune wherever they go and can even teach humans to perform miracles and healing rituals. However, Duwendeng Puti are quite temperamental. If you displease them, they will instantly disappear and will never show themselves to you again.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30109485,
      "image_url": "https://lh3.googleusercontent.com/qUKsKXDPaibfqikTWp0cp9lPmDv5h-2fp4bIVkv3sv4CkfuPUpE4IvKO_OG3bfR2SIa0fPEhFLJwMl7TqPGxxBjFDHIkCxpBIpOJDg"
    },
    {
      "name": "ASWANG #07 - Bal-Bal",
      "characterName": "Bal-Bal",
      "type": "ASWANG",
      "typeCharId": 7,
      "description": "Bal-Bal are flying corpse thieves who feed only on rotting flesh. They use their sharp claws to dig up graves and their powerful jaws to tear through muscle and bone. Once the Bal-Bal has fed, it will leave the trunk of a banana tree in the coffin, creating an illusion of the stolen body to trick the dead person's relatives.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30107762,
      "image_url": "https://lh3.googleusercontent.com/hQuwJyxggffUMikkI9kFdVeYfRYfKzLM8UC-ILhkIuwTrPM2SFeux1oGicvfJLk53N6x_qT4yb_xZafEQ8RNGOaFv0AuRL_LcxSIFEs"
    },
    {
      "name": "ASWANG #06 - Kapre",
      "characterName": "Kapre",
      "type": "ASWANG",
      "typeCharId": 6,
      "description": "Kapre are giant, tree-dwelling entities. Usually invisible to humans, a telltale sign of the presence of a Kapre is the thick stench emanating from the giant cigar they are constantly smoking. Kapre are not necessarily evil, but they often like to play tricks on humans. If you find yourself stuck in the wilderness, hopelessly going around in circles, then you may be an unwitting victim of a Kapre's prank. To escape its control, you must remove your clothing, and wear it inside-out.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30102093,
      "image_url": "https://lh3.googleusercontent.com/C73diDoXqECuGV6nhTi0XJUmlMYWr779KiaNEzVVrycoQs5bz9ZiIoDzvQCyYP-5iYPp6aQJsdOLP4LWnjpZ0ugnJthbI1-ymjrhIw"
    },
    {
      "name": "ASWANG #05 - Sigbin",
      "characterName": "Sigbin",
      "type": "ASWANG",
      "typeCharId": 5,
      "description": "Sigbin are nocturnal creatures that resemble a crossbreed between a goat, a dog, and a kangaroo. They have the ability to become invisible to humans and can use their long, flexible tails as a whip. Sigbin are said to come out of their lairs during Holy Week. During this time, they attack unsuspecting children and tear out their hearts so they can fashion them into Agimat (amulets).\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30100681,
      "image_url": "https://lh3.googleusercontent.com/Zg5O97Z2zDC2aBqsVOrTz3sVUyDyF111DLDUKh-70-3f0bOwEGqGfa3TmB-oCIa-4YheuMumspNy9LU5ferroDTto3F2PVAGCgj1"
    },
    {
      "name": "ASWANG #04 - Tahamaling",
      "characterName": "Tahamaling",
      "type": "ASWANG",
      "typeCharId": 4,
      "description": "Tahamaling are forest spirits that take the form of beautiful women with red skin. These elusive creatures are the guardians of forest animals - taking care of the wounded and protecting them from harm. Tahamaling require an offering from humans before they are allowed to hunt in her forest. They immediately punish any man that dares to hunt inside their domain without permission.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30098434,
      "image_url": "https://lh3.googleusercontent.com/XAzUzeZLzkFJ1r5jwYV6HYFq5DIQtd9qVXM2dhhROTXXa3vuwtmq9Byh7GPzgz5pAkh40T98g9ucgzV2HV1AKdZl8KunEhJb4g2_"
    },
    {
      "name": "ASWANG #03 - Sarangay",
      "characterName": "Sarangay",
      "type": "ASWANG",
      "typeCharId": 3,
      "description": "Half-human, half-carabao (water buffalo), the Sarangay is the Filipino counterpart of the Greek Minotaur. They dwell in the wilderness and protect their habitats using their intimidating horns and muscular bodies. The Sarangay are said to have sacred jewels attached to their ears. They will mercilessly kill any human foolish enough to attempt to steal them.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30096737,
      "image_url": "https://lh3.googleusercontent.com/Zr6svNGAdKWurvhuS2Z5hPYnd_9BLPFAGo32TYE-7ALLZrhhkad4y6o449FDOczbfor6ScymQ93qkvQuOW5VxGRdvTpenLUg5-EjNQ"
    },
    {
      "name": "ASWANG #02 - Pugot",
      "characterName": "Pugot",
      "type": "ASWANG",
      "typeCharId": 2,
      "description": "The Pugot is a headless, shape-shifting creature. Usually harmless to humans, it can move at great speeds and feeds on snakes and insects by thrusting food trough its neck stump. Some say the Pugot was once a friar who was beheaded during the Spanish Colonial era. Centuries later, and it is still searching for its head.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30094821,
      "image_url": "https://lh3.googleusercontent.com/cvBHsfqi4TJF9ZzKA8QndK4DRE373VwM9bHfaXC7lkpdz-KumsWC9IFvl7eFFpPpcmEnjo5W5gxLDlhnHpTIq3ZdX-TeAoCvP-Fmug"
    },
    {
      "name": "ASWANG #01 - Manananggal",
      "characterName": "Manananggal",
      "type": "ASWANG",
      "typeCharId": 1,
      "description": "The Manananggal is a beautiful woman by day. But once the sun goes down, she rips her body in half and sprouts bat-like wings. Under the cover of nightfall, she hunts for pregnant women and uses her snake-like tongue to puncture their wombs and eat the fetus inside. Sunlight is deadly to the Manananggal when she is in her Aswang form. If her two halves are still separated by morning, she will be destroyed.\n\nEditions: 1 of 1",
      "fusion": [],
      "tokenId": 4.542017771165385e+76,
      "openSeaId": 30094271,
      "image_url": "https://lh3.googleusercontent.com/2nexWMHH9v2CEw1evgaQs12H9ZukjVnJrHyAeHB7ppPfZFAvH_2uLSQ8HD0q90CG6PG3TQOwulQeIrOXlL13HwHtQJDz1Mgs7qCJBuc"
    }
  ]

  constructor() {}
}
