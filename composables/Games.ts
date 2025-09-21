export function useGames() {
  const gamesMap: Record<
    string,
    {
      name: string;
      color: { bg: string; txt: string };
      shot_types: Record<string, { name: string }>;
    }
  > = {
    th06: {
      name: "composables.Games.th06.title",
      color: {
        bg: "#993333",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th06.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th06.shot_types.reimu_b" },
        MarisaA: { name: "composables.Games.th06.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th06.shot_types.marisa_b" },
      },
    },
    th07Ex: {
      name: "composables.Games.th07.title.ex",
      color: {
        bg: "#FF75DD",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th07.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th07.shot_types.reimu_b" },
        MarisaA: { name: "composables.Games.th07.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th07.shot_types.marisa_b" },
        SakuyaA: { name: "composables.Games.th07.shot_types.sakuya_a" },
        SakuyaB: { name: "composables.Games.th07.shot_types.sakuya_a" },
      },
    },
    th07Ph: {
      name: "composables.Games.th07.title.ph",
      color: {
        bg: "#FF75DD",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th07.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th07.shot_types.reimu_b" },
        MarisaA: { name: "composables.Games.th07.shot_types.marias_a" },
        MarisaB: { name: "composables.Games.th07.shot_types.marias_b" },
        SakuyaA: { name: "composables.Games.th07.shot_types.sakuya_a" },
        SakuyaB: { name: "composables.Games.th07.shot_types.sakuya_b" },
      },
    },
    th08: {
      name: "composables.Games.th08.title",
      color: {
        bg: "#333399",
        txt: "#FFFFFF",
      },
      shot_types: {
        Border: { name: "composables.Games.th08.shot_types.border" },
        Magic: { name: "composables.Games.th08.shot_types.magic" },
        Scarlet: { name: "composables.Games.th08.shot_types.scarlet" },
        Netherworld: { name: "composables.Games.th08.shot_types.netherworld" },
        Reimu: { name: "composables.Games.th08.shot_types.reimu" },
        Yukari: { name: "composables.Games.th08.shot_types.yukari" },
        Marisa: { name: "composables.Games.th08.shot_types.marisa" },
        Alice: { name: "composables.Games.th08.shot_types.alice" },
        Sakuya: { name: "composables.Games.th08.shot_types.sakuya" },
        Remilia: { name: "composables.Games.th08.shot_types.remilia" },
        Youmu: { name: "composables.Games.th08.shot_types.youmu" },
        Yuyuko: { name: "composables.Games.th08.shot_types.yuyuko" },
      },
    },
    th10: {
      name: "composables.Games.th10.title",
      color: {
        bg: "#96B300",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th10.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th10.shot_types.reimu_b" },
        ReimuC: { name: "composables.Games.th10.shot_types.reimu_c" },
        MarisaA: { name: "composables.Games.th10.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th10.shot_types.marisa_b" },
        MarisaC: { name: "composables.Games.th10.shot_types.marisa_c" },
      },
    },
    th11: {
      name: "composables.Games.th11.title",
      color: {
        bg: "#591400",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th11.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th11.shot_types.reimu_b" },
        ReimuC: { name: "composables.Games.th11.shot_types.reimu_c" },
        MarisaA: { name: "composables.Games.th11.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th11.shot_types.marisa_b" },
        MarisaC: { name: "composables.Games.th11.shot_types.marisa_c" },
      },
    },
    th12: {
      name: "composables.Games.th12.title",
      color: {
        bg: "#4169E1",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th12.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th12.shot_types.reimu_b" },
        MarisaA: { name: "composables.Games.th12.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th12.shot_types.marisa_b" },
        SanaeA: { name: "composables.Games.th12.shot_types.sanae_a" },
        SanaeB: { name: "composables.Games.th12.shot_types.sanae_b" },
      },
    },
    th128: {
      name: "composables.Games.th128.title",
      color: {
        bg: "#009898",
        txt: "#FFFFFF",
      },
      shot_types: {
        Cirno: { name: "composables.Games.th128.shot_types.cirno" },
      },
    },
    th13: {
      name: "composables.Games.th13.title",
      color: {
        bg: "#4A808C",
        txt: "#FFFFFF",
      },
      shot_types: {
        Reimu: { name: "composables.Games.th13.shot_types.reimu" },
        Marisa: { name: "composables.Games.th13.shot_types.marisa" },
        Sanae: { name: "composables.Games.th13.shot_types.sanae" },
        Youmu: { name: "composables.Games.th13.shot_types.youmu" },
      },
    },
    th14: {
      name: "composables.Games.th14.title",
      color: {
        bg: "#AA7777",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuA: { name: "composables.Games.th14.shot_types.reimu_a" },
        ReimuB: { name: "composables.Games.th14.shot_types.reimu_b" },
        MarisaA: { name: "composables.Games.th14.shot_types.marisa_a" },
        MarisaB: { name: "composables.Games.th14.shot_types.marisa_b" },
        SakuyaA: { name: "composables.Games.th14.shot_types.sakuya_a" },
        SakuyaB: { name: "composables.Games.th14.shot_types.sakuya_b" },
      },
    },
    th15: {
      name: "composables.Games.th15.title",
      color: {
        bg: "#6A47BE",
        txt: "#FFFFFF",
      },
      shot_types: {
        Reimu: { name: "composables.Games.th15.shot_types.reimu" },
        Marisa: { name: "composables.Games.th15.shot_types.marisa" },
        Sanae: { name: "composables.Games.th15.shot_types.sanae" },
        Reisen: { name: "composables.Games.th15.shot_types.reisen" },
      },
    },
    th16: {
      name: "composables.Games.th16.title",
      color: {
        bg: "#176E0E",
        txt: "#FFFFFF",
      },
      shot_types: {
        Reimu: { name: "composables.Games.th16.shot_types.reimu" },
        Cirno: { name: "composables.Games.th16.shot_types.cirno" },
        Aya: { name: "composables.Games.th16.shot_types.aya" },
        Marisa: { name: "composables.Games.th16.shot_types.marisa" },
      },
    },
    th17: {
      name: "composables.Games.th17.title",
      color: {
        bg: "#190E0E",
        txt: "#FFFFFF",
      },
      shot_types: {
        ReimuW: { name: "composables.Games.th17.shot_types.reimu_w" },
        ReimuO: { name: "composables.Games.th17.shot_types.reimu_o" },
        ReimuE: { name: "composables.Games.th17.shot_types.reimu_e" },
        MarisaW: { name: "composables.Games.th17.shot_types.marisa_w" },
        MarisaO: { name: "composables.Games.th17.shot_types.marisa_o" },
        MarisaE: { name: "composables.Games.th17.shot_types.marisa_e" },
        YoumuW: { name: "composables.Games.th17.shot_types.youmu_w" },
        YoumuO: { name: "composables.Games.th17.shot_types.youmu_o" },
        YoumuE: { name: "composables.Games.th17.shot_types.youmu_e" },
      },
    },
    th18: {
      name: "composables.Games.th18.title",
      color: {
        bg: "#1DD294",
        txt: "#FFFFFF",
      },
      shot_types: {
        Reimu: { name: "composables.Games.th18.shot_types.reimu" },
        Marisa: { name: "composables.Games.th18.shot_types.marisa" },
        Sakuya: { name: "composables.Games.th18.shot_types.sakuya" },
        Sanae: { name: "composables.Games.th18.shot_types.sanae" },
      },
    },
  };
  return gamesMap;
}
