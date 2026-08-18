/**
 * 站点配置 —— 以后只需要修改这个文件
 * 图片链接 (cover) 填写在这里，所有卡片点击后都跳转到全局下载链接 downloadUrl。
 * 标题会自动取图片文件名，例如 "https://example.com/picture1.webp" -> "picture1"。
 */

export type VideoCard = {
  id: string;
  /** 封面图链接，示例："https://example.com/picture1.webp"，留空显示占位底色 */
  cover: string;
  /** 时长，例如 "80:58" */
  duration: string;
  /** 右上角 HD 标签 */
  hd?: boolean;
  /** 左上角 VIP 标签 */
  vip?: boolean;
  /** 标题下方的标签，最多两个 */
  tags?: string[];
  /** 播放量，例如 "100K" */
  views?: string;
  /** 好评率，例如 "97%" */
  likes?: string;
};

export const siteConfig = {
  /** 站名（留空则不显示） */
  brandName: "XUTOPIA",
  /** 站名后的小徽标文字 */
  brandBadge: "Video",
  /** 顶部公告条（跑马灯，一行文字） */
  announcement: "Anuncio: Nueva URL oficial publicada, guárdala para no perderte. Registro VIP gratis abierto.",
  /** 全局下载链接（所有图片和按钮都指向这里），示例："https://example.com/download" */
  downloadUrl: "https://qwfq91y5ygeq.voidquestpro.com/eW1nlClHlZ5",
  /** 顶部快捷胶囊按钮 */
  chips: [
    { icon: "video" as const, label: "Videos gratis" },
    { icon: "heart" as const, label: "En vivo" },
    { icon: "car" as const, label: "Exclusivo VIP" },
  ],
  /** 列表区标题 */
  sectionTitle: "Recomendados",
  /**
   * 视频卡片列表
   * cover = 封面图链接，示例："https://example.com/picture1.webp"
   * 标题自动使用图片文件名，无需填写
   */
  videos: [
    {
      id: "1",
      cover: "https://gspotwizard.com/pictures/gspot-wizard-eating-pussy-sex-gif-08598973.webp",
      duration: "80:58",
      hd: true,
      vip: true,
      tags: ["Popular", "Sub ES"],
      views: "100K",
      likes: "97%",
    },
    {
      id: "2",
      cover: "https://gspotwizard.com/pictures/going-deep-424.gif.webp",
      duration: "74:15",
      hd: true,
      tags: ["Nuevo", "Tendencia"],
      views: "46K",
      likes: "99%",
    },
    {
      id: "3",
      cover: "https://gspotwizard.com/pictures/gspotwizard-fingering-shaved-wet-pussy-8195604.webp",
      duration: "49:16",
      hd: true,
      tags: ["Tendencia", "Sub ES"],
      views: "92K",
      likes: "96%",
    },
    {
      id: "4",
      cover: "https://gspotwizard.com/pictures/gspotwizard-blowjob-gif-570.webp",
      duration: "84:02",
      hd: true,
      vip: true,
      tags: ["Popular", "Sub ES"],
      views: "99K",
      likes: "93%",
    },
    {
      id: "5",
      cover: "https://gspotwizard.com/pictures/gspotwizard-eat-pussy-094.webp",
      duration: "102:40",
      hd: true,
      tags: ["Destacado", "Recomendado"],
      views: "104K",
      likes: "94%",
    },
    {
      id: "6",
      cover: "https://gspotwizard.com/pictures/gspotwizard-doggystyle-sex-448-1.webp",
      duration: "47:52",
      hd: true,
      tags: ["Exclusivo", "Destacado"],
      views: "174K",
      likes: "95%",
    },
    {
      id: "7",
      cover: "https://gspotwizard.com/pictures/gspotwizard-porn-gif-3631.webp",
      duration: "48:05",
      hd: true,
      tags: ["Fijado", "HD"],
      views: "66K",
      likes: "94%",
    },
    {
      id: "8",
      cover: "https://gspotwizard.com/pictures/gspotwizard-porn-gif-707.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "9",
      cover: "https://gspotwizard.com/pictures/gspotwizard-doggy-style-anal-gif-1215135189.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "10",
      cover: "https://gspotwizard.com/pictures/gspotwizard-porn-gif-146.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "11",
      cover: "https://gspotwizard.com/pictures/gspotwizard-eye-contact-blowjob-gif-284.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "12",
      cover: "https://gspotwizard.com/pictures/gspotwizard-cumshot-gif-1212130574.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "13",
      cover: "https://gspotwizard.com/pictures/gspotwizard-facesitting-position-gif-16530.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "14",
      cover: "https://gspotwizard.com/pictures/gspotwizard-porn-gif-8332.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
    {
      id: "15",
      cover: "https://gspotwizard.com/pictures/gspotwizard-sex-gif-031.webp",
      duration: "69:19",
      hd: true,
      vip: true,
      tags: ["Exclusivo", "Destacado"],
      views: "18K",
      likes: "96%",
    },
  ] as VideoCard[],
  /** 加载更多按钮文字 */
  loadMoreText: "Cargar más",
  /** 底部固定下载条 */
  bottomBar: {
    title: "Descarga la App oficial",
    subtitle: "Miles de videos HD, gratis",
    buttonText: "Descargar",
  },
  /** 打开页面时的弹窗提示 */
  modal: {
    enabled: true,
    header: "Aviso",
    title: "Contenido VIP",
    desc: "Descarga la App para ver todos los videos en HD",
    note: "Contenido gratis • Conexión rápida y estable",
    buttonText: "Descargar y ver ahora",
    footnote: "Seguro • Oficial • Descarga rápida",
  },
  /** SEO 信息（浏览器标题与分享描述） */
  seo: {
    title: "Descarga la App oficial · Videos HD online",
    description: "Página oficial de descarga: miles de videos HD gratis, reproducción rápida y estable.",
  },
};

export type SiteConfig = typeof siteConfig;
