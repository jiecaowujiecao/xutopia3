import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Car,
  Eye,
  Flame,
  Heart,
  ImageIcon,
  Menu,
  Search,
  UserCircle2,
  Video,
  X,
} from "lucide-react";
import { siteConfig, type VideoCard } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.seo.title },
      { name: "description", content: siteConfig.seo.description },
      { property: "og:title", content: siteConfig.seo.title },
      { property: "og:description", content: siteConfig.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chipIcons = { video: Video, heart: Heart, car: Car };

/** 从图片链接中取出文件名（不含扩展名）作为标题 */
function titleFromCover(cover: string) {
  if (!cover) return "";
  try {
    const path = (cover.split("?")[0] ?? "").split("#")[0] ?? "";
    const file = path.substring(path.lastIndexOf("/") + 1);
    return file.replace(/\.[^.]+$/, "");
  } catch {
    return "";
  }
}

function Card({ item, href }: { item: VideoCard; href: string }) {
  const title = titleFromCover(item.cover);
  return (
    <a href={href || undefined} className="block overflow-hidden rounded-lg bg-card">
      <div className="relative aspect-[3/4] w-full bg-secondary">
        {item.cover ? (
          <img
            key={item.cover}
            src={item.cover}
            alt={title || "Portada del video"}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-muted-foreground">
            <ImageIcon className="h-8 w-8 opacity-40" />
          </div>
        )}
        {item.vip ? (
          <span className="absolute left-1.5 top-1.5 rounded bg-[oklch(0.62_0.23_10)] px-1.5 py-[1px] text-[10px] font-bold text-white">
            VIP
          </span>
        ) : null}
        {item.hd ? (
          <span className="absolute right-1.5 top-1.5 rounded bg-accent px-1.5 py-[1px] text-[10px] font-bold text-accent-foreground">
            HD
          </span>
        ) : null}
        <span className="absolute bottom-1.5 right-1.5 rounded bg-black/75 px-1.5 py-[1px] text-[10px] font-semibold text-white">
          {item.duration}
        </span>
      </div>

      <div className="px-2 py-2">
        <p className="line-clamp-1 text-[13px] text-foreground/90">
          {title || "\u00a0"}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1">
          {(item.tags ?? []).map((t, i) => (
            <span
              key={t + i}
              className={
                "rounded px-1.5 py-[1px] text-[10px] " +
                (i === 0
                  ? "bg-[oklch(0.62_0.23_10/25%)] text-[oklch(0.72_0.2_12)]"
                  : "bg-secondary text-muted-foreground")
              }
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {item.views}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            {item.likes}
          </span>
        </div>
      </div>
    </a>
  );
}

const PAGE_SIZE = 6;

/** 随机打乱数组（Fisher-Yates） */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}

function Index() {
  const c = siteConfig;
  const [modalOpen, setModalOpen] = useState(c.modal.enabled);
  const [order, setOrder] = useState<VideoCard[]>(c.videos);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // 打开页面时随机排列（在客户端执行，避免 SSR 水合不一致）
  useEffect(() => {
    setOrder(shuffle(c.videos));
  }, [c.videos]);

  // 无限循环：超出数量后从头重复，并保持 key 唯一
  const visibleVideos =
    order.length === 0
      ? []
      : Array.from({ length: visibleCount }, (_, i) => {
          const item = order[i % order.length] as VideoCard;
          return { item, key: `${item.id}-${i}` };
        });
  const hasMore = order.length > 0;

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  useEffect(() => {
    if (!hasMore) return;
    const el = loaderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[480px] bg-background pb-24 text-foreground">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-20 flex items-center justify-between gap-3 bg-card px-3 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <button aria-label="Menú" className="shrink-0 text-foreground">
            <Menu className="h-6 w-6" />
          </button>
          <span className="truncate text-2xl font-black italic tracking-tight">
            {c.brandName}
          </span>
          {c.brandBadge ? (
            <span className="shrink-0 rounded bg-accent px-1.5 py-[2px] text-xs font-bold italic text-accent-foreground">
              {c.brandBadge}
            </span>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-3 text-foreground">
          <button aria-label="Buscar">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Mi cuenta">
            <UserCircle2 className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* 公告条：跑马灯 */}
      <div className="overflow-hidden bg-secondary/60 py-1">
        <div className="flex w-max animate-marquee whitespace-nowrap text-[11px] text-[oklch(0.85_0.17_95)]">
          <span className="px-6">{c.announcement}</span>
          <span className="px-6">{c.announcement}</span>
        </div>
      </div>

      {/* 快捷胶囊 */}
      <div className="flex flex-wrap justify-center gap-2 px-3 py-3">
        {c.chips.map((chip) => {
          const Icon = chipIcons[chip.icon];
          return (
            <span
              key={chip.label}
              className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs text-foreground/90"
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {chip.label}
            </span>
          );
        })}
      </div>

      {/* 列表标题 */}
      <h2 className="flex items-center gap-1.5 px-3 pb-2 pt-1 text-base font-bold">
        <Flame className="h-4 w-4 text-primary" />
        {c.sectionTitle}
      </h2>

      {/* 卡片网格 */}
      <main className="grid grid-cols-2 gap-2 px-3">
        {visibleVideos.map(({ item, key }) => (
          <Card key={key} item={item} href={c.downloadUrl} />
        ))}
      </main>

      {hasMore ? (
        <div ref={loaderRef} className="px-3 py-4">
          <button
            onClick={loadMore}
            className="w-full rounded-lg bg-card py-3 text-sm text-muted-foreground"
          >
            {c.loadMoreText}
          </button>
        </div>
      ) : null}

      {/* 底部固定下载条 */}
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto flex max-w-[480px] items-center justify-between gap-3 bg-card px-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-base font-bold">{c.bottomBar.title}</p>
          <p className="truncate text-xs text-accent">{c.bottomBar.subtitle}</p>
        </div>
        <a
          href={c.downloadUrl || undefined}
          className="shrink-0 rounded-full px-6 py-3 text-base font-bold text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          {c.bottomBar.buttonText}
        </a>
      </div>

      {/* 弹窗 */}
      {modalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-[340px] overflow-hidden rounded-xl bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="text-sm font-bold">{c.modal.header}</h3>
              <button aria-label="Cerrar" onClick={() => setModalOpen(false)}>
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="px-5 py-5 text-center">
              <p className="text-lg font-black text-accent">{c.modal.title}</p>
              <p className="mt-2 text-sm text-foreground/90">{c.modal.desc}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{c.modal.note}</p>
              <a
                href={c.downloadUrl || undefined}
                className="mt-4 block rounded-full py-3 text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {c.modal.buttonText}
              </a>
              <p className="mt-3 text-[11px] text-muted-foreground">{c.modal.footnote}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
