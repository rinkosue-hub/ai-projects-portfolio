import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Image as ImageIcon,
  Layers3,
  PlayCircle,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    id: "xhs",
    eyebrow: "项目01",
    title: "小红书用户反馈洞察助手",
    description:
      "基于小红书公开笔记及评论，自动完成内容抓取、问题归类、风险识别、责任方归因和建议动作生成，辅助发现用户体验问题及潜在舆情风险。",
    media: {
      type: "video",
      sources: [
        { src: "/xhs-demo.mp4", type: "video/mp4" },
        { src: "/xhs-demo.mov", type: "video/quicktime" },
      ],
      label: "演示视频待补充",
      hint: "准备好后放入项目的公开资源目录",
    },
    workflow: [
      "关键词输入",
      "内容抓取",
      "问题归类",
      "风险识别",
      "责任方归因",
      "建议动作生成",
      "分析报告输出",
    ],
  },
  {
    id: "ads",
    eyebrow: "项目02",
    title: "广告投放周报助手",
    description:
      "基于广告投放的飞书数据底表，自动完成周报文档，包含指标计算、多维度分析、策略输出等内容。",
    media: {
      type: "screenshots",
      note: "说明：以下示例中的客户名称及相关数据均由随机数生成器模拟生成，仅用于展示分析流程和结果样式。",
      items: [
        {
          src: "/ad-prompt.png",
          title: "输入基础信息，调用 skill",
          summary: "输入底表链接、品牌、KPI 与预算目标，触发周报生成流程。",
          label: "指令输入截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-table.png",
          title: "读取飞书数据底表",
          summary: "从广告投放的数据底表中读取数据并进行聚合计算。",
          label: "飞书底表截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-report-overview.png",
          title: "生成周报核心结论",
          summary: "汇总本周表现、环比变化和下一步建议，呈现整体判断。",
          label: "周报核心结论截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-report-dimensions.png",
          groupTitle: "多维度拆解与组合分析",
          groupSummary:
            "围绕广告类型、人群、内容角度和内容 × 人群组合拆解表现，定位可放量、需观察和应收缩的投放方向。",
          label: "广告类型与人群拆分截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-report-content.png",
          label: "内容角度拆分截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-report-combo.png",
          label: "内容角度与人群组合截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
        {
          src: "/ad-report-strategy.png",
          title: "输出下周投放策略",
          summary: "基于 KPI 和成本表现，生成预算倾斜、观察与关停收缩建议。",
          label: "周报策略分析截图待补充",
          hint: "准备好后放入项目的公开资源目录",
        },
      ],
    },
    workflow: [
      "业务目标输入",
      "飞书底表读取",
      "指标计算",
      "多维度分析",
      "策略建议",
      "飞书周报输出",
    ],
  },
];

function App() {
  return (
    <div className="min-h-dvh bg-slate-100 text-slate-950">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        跳转到主要内容
      </a>
      <Header />
      <main
        id="content"
        className="mx-auto grid w-[min(1240px,calc(100%_-_32px))] gap-6 py-8 sm:w-[min(1240px,calc(100%_-_48px))] sm:py-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start lg:gap-6 lg:py-14 xl:grid-cols-[196px_minmax(0,1fr)] xl:gap-7"
      >
        <DirectoryNav />
        <section className="grid min-w-0 gap-7 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-16 w-[min(1180px,calc(100%_-_32px))] items-center sm:w-[min(1180px,calc(100%_-_48px))]"
        aria-label="页面标题"
      >
        <a href="#" className="text-base font-black tracking-normal text-slate-950 md:text-lg">
          虞苏平<span className="text-blue-600">｜AI项目作品集</span>
        </a>
      </nav>
    </header>
  );
}

function DirectoryNav() {
  return (
    <aside className="lg:sticky lg:top-24" aria-label="项目目录">
      <div className="border-slate-200 lg:border-l lg:pl-4">
        <div className="mb-3 text-xs font-black text-slate-400">项目目录</div>
        <div className="flex gap-2 overflow-x-auto lg:grid lg:gap-1">
          <DirectoryLink href="#xhs">小红书用户反馈洞察助手</DirectoryLink>
          <DirectoryLink href="#ads">广告投放周报助手</DirectoryLink>
        </div>
      </div>
    </aside>
  );
}

function DirectoryLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-10 shrink-0 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:w-full lg:border-0 lg:bg-transparent lg:px-0"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      id={project.id}
      className="scroll-mt-28 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.07)]"
    >
      <div className="border-b border-slate-100 p-6 sm:p-8">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-normal text-blue-700">
              {project.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-normal text-slate-950 sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{project.description}</p>
        </div>
      </div>

      <div
        className={
          project.media.type === "video"
            ? "grid gap-8 p-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6"
            : "grid gap-8 p-6 pb-4 sm:px-8 sm:pb-4 sm:pt-8"
        }
      >
        <section aria-labelledby={`${project.id}-workflow`}>
          <SectionHeading id={`${project.id}-workflow`} icon={Layers3}>
            工作流
          </SectionHeading>
          <Workflow steps={project.workflow} />
        </section>
      </div>

      <div
        className={
          project.media.type === "video"
            ? "bg-gradient-to-b from-white to-slate-50 p-4 pt-3 sm:px-6 sm:pb-9 sm:pt-3 lg:px-8 lg:pb-10 lg:pt-2"
            : "bg-gradient-to-b from-white to-slate-50 p-4 pt-4 sm:px-6 sm:pb-6 sm:pt-4 lg:px-8 lg:pb-8 lg:pt-4"
        }
      >
        <MediaBlock media={project.media} projectTitle={project.title} />
      </div>
    </article>
  );
}

function SectionHeading({ id, icon: Icon, children }) {
  return (
    <h3 id={id} className="mb-4 flex items-center gap-2 text-base font-black text-slate-950">
      <Icon className="text-blue-600" size={18} aria-hidden="true" />
      {children}
    </h3>
  );
}

function Workflow({ steps }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <li className="inline-flex min-h-11 items-center rounded-full border border-blue-100 bg-blue-50 px-4 text-sm font-extrabold text-blue-700">
            {step}
          </li>
          {index < steps.length - 1 && (
            <ArrowRight className="hidden text-slate-300 sm:block" size={18} aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </ol>
  );
}

function MediaBlock({ media, projectTitle }) {
  if (media.type === "video") {
    return <VideoSlot media={media} projectTitle={projectTitle} />;
  }

  return (
    <div className="grid gap-6">
      {media.note && (
        <p className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-4 text-sm font-semibold leading-6 text-slate-700">
          {media.note}
        </p>
      )}
      {media.items.map((item) => (
        <React.Fragment key={item.src}>
          {(item.groupTitle || item.groupSummary) && (
            <GroupHeading title={item.groupTitle} summary={item.groupSummary} />
          )}
          <ImageSlot item={item} />
        </React.Fragment>
      ))}
    </div>
  );
}

function GroupHeading({ title, summary }) {
  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50/60 px-4 py-4 sm:px-5">
      {title && <h4 className="border-l-4 border-blue-600 pl-3 text-base font-black text-blue-700">{title}</h4>}
      {summary && <p className="mt-2 text-sm leading-6 text-slate-500">{summary}</p>}
    </div>
  );
}

function VideoSlot({ media, projectTitle }) {
  const [selectedSource, setSelectedSource] = useState(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function selectAvailableSource() {
      for (const source of media.sources) {
        try {
          const response = await fetch(source.src, { method: "HEAD" });
          const contentType = response.headers.get("content-type") || "";
          if (response.ok && contentType.startsWith("video/")) {
            if (!cancelled) {
              setSelectedSource(source);
              setMissing(false);
            }
            return;
          }
        } catch {
          // Try the next declared source before showing the placeholder.
        }
      }

      if (!cancelled) {
        setSelectedSource(null);
        setMissing(true);
      }
    }

    selectAvailableSource();

    return () => {
      cancelled = true;
    };
  }, [media.sources]);

  return (
    <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
      <div className="relative aspect-video min-h-[230px] bg-blue-50 sm:min-h-[360px]">
        {selectedSource ? (
          <video
            className="h-full w-full bg-slate-950 object-contain"
            controls
            preload="metadata"
            aria-label={`${projectTitle} 演示视频`}
            src={selectedSource.src}
            onError={() => {
              setSelectedSource(null);
              setMissing(true);
            }}
          />
        ) : (
          <Placeholder
            icon={PlayCircle}
            label={missing ? media.label : "正在检查演示视频资源"}
            hint={media.hint}
          />
        )}
      </div>
    </div>
  );
}

function ImageSlot({ item }) {
  const [available, setAvailable] = useState(true);

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      {(item.title || item.summary) && (
        <div className="border-b border-blue-100 bg-blue-50/60 px-4 py-4 sm:px-5">
          {item.title && (
            <h4 className="border-l-4 border-blue-600 pl-3 text-base font-black text-blue-700">
              {item.title}
            </h4>
          )}
          {item.summary && <p className="mt-2 text-sm leading-6 text-slate-500">{item.summary}</p>}
        </div>
      )}
      <div className="relative min-h-[260px] bg-slate-50">
        {available ? (
          <img
            className="h-auto w-full"
            src={item.src}
            alt={item.label.replace("待补充", "")}
            loading="lazy"
            onError={() => setAvailable(false)}
          />
        ) : (
          <div className="relative aspect-[16/10]">
            <Placeholder icon={ImageIcon} label={item.label} hint={item.hint} compact />
          </div>
        )}
      </div>
    </div>
  );
}

function Placeholder({ icon: Icon, label, hint, compact = false }) {
  return (
    <div className="absolute inset-0 grid place-items-center p-5 text-center">
      <div className="grid max-w-md justify-items-center gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
          <Icon size={compact ? 24 : 28} aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-black text-slate-900">{label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{hint}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-[min(1180px,calc(100%_-_32px))] border-t border-slate-200 py-8 text-sm text-slate-500 sm:w-[min(1180px,calc(100%_-_48px))]">
      <div>
        <span className="font-semibold text-slate-700">虞苏平｜AI项目作品集</span>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
);
