import { TeamMember, ColorScheme } from './types';
import { Shield, Cpu, Palette, Leaf } from 'lucide-react';

export const THEME_COLORS: Record<string, ColorScheme> = {
  LEADER: {
    primary: 'text-amber-400',
    secondary: 'text-amber-200',
    border: 'border-amber-500/50',
    shadow: 'shadow-amber-500/20',
    bg: 'bg-amber-950/30',
    text: 'text-amber-100',
  },
  IT_AI: {
    primary: 'text-cyan-400',
    secondary: 'text-cyan-200',
    border: 'border-cyan-500/50',
    shadow: 'shadow-cyan-500/20',
    bg: 'bg-cyan-950/30',
    text: 'text-cyan-100',
  },
  GRAPHIC: {
    primary: 'text-purple-400',
    secondary: 'text-purple-200',
    border: 'border-purple-500/50',
    shadow: 'shadow-purple-500/20',
    bg: 'bg-purple-950/30',
    text: 'text-purple-100',
  },
  ORGANIC: {
    primary: 'text-emerald-400',
    secondary: 'text-emerald-200',
    border: 'border-emerald-500/50',
    shadow: 'shadow-emerald-500/20',
    bg: 'bg-emerald-950/30',
    text: 'text-emerald-100',
  },
};

export const ROLE_ICONS: Record<string, any> = {
  LEADER: Shield,
  IT_AI: Cpu,
  GRAPHIC: Palette,
  ORGANIC: Leaf,
};

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'leader-01',
    name: "พี่เอิธ (P'Earth)",
    role: "Marketing & Sales Lead (The Commander)",
    roleType: 'LEADER',
    coreFunction: "กำหนดทิศทางยุทธศาสตร์การตลาดและการขาย, ตัดสินใจขั้นสุดท้าย (Go/No-Go), เป็นจุดเชื่อมประสานระหว่างทีมการตลาด ทีมขาย และผู้บริหารระดับสูง",
    protocols: {
      urgent: "Direct Line / Call (สายด่วน)",
      routine: "Google Workspace / Weekly Meeting",
      rule: "Trust your gut, but verify with data. (ถ้าไม่แน่ใจ ให้ถาม)"
    }
  },
  {
    id: 'op-01',
    name: "แตงกวา (Tangkwa)",
    role: "IT + AI + Ads Specialist (The Architect)",
    roleType: 'IT_AI',
    mainDuty: "ดูแลระบบหลังบ้านทั้งหมด (Ads Optimization) และแปรรูป Data ให้เป็น Insight ที่ทีมนำไปใช้ต่อได้จริง",
    tasks: {
      daily: ["Monitor Ads Performance (Meta/Google)", "ตรวจสอบความผิดปกติของค่า CPL/CTR", "Support ปัญหา IT และ Hardware ของทีม"],
      weekly: {
        name: "Competitor Intelligence Scouting",
        tool: "Perplexity AI + Social Listening",
        outputs: ["วิเคราะห์โปรโมชั่นคู่แข่ง", "จับตา Tone of Voice ใหม่ๆ", "ถอดรหัส Key Visual คู่แข่ง"]
      },
      special: "R&D เครื่องมือ AI ใหม่ๆ (Gen AI) เพื่อลดเวลาทำงานและสร้าง Workflow อัตโนมัติ"
    }
  },
  {
    id: 'op-02',
    name: "บอย (Boy)",
    role: "Senior Graphic & Creative (The Creator)",
    roleType: 'GRAPHIC',
    mainDuty: "ผลิต Visual Content ทั้งภาพและวิดีโอ เพื่อตอบโจทย์ Performance Marketing และ Branding (เน้นขายได้และภาพลักษณ์ดี)",
    workflowRule: "Creative Pattern Protocol",
    tasks: {
      daily_pattern: {
        images: "Stills (Key Visual / Perspective / Mood & Tone)",
        short_videos: "Short Video (Reels / TikTok / Walkthrough)",
        ads: "Conversion Ads (Promotion / Hard Sell / Info)"
      },
      input_source: "รับ Brief Strategy จากแตงกวา และ Direction จากพี่เอิธ"
    }
  },
  {
    id: 'op-03',
    name: "สุ (Su)",
    role: "Content Creator & Organic Lead (The Soul)",
    roleType: 'ORGANIC',
    mainDuty: "สร้างสรรค์ Content ให้เพจมีชีวิตชีวา (Engagement) และนำเสนอภาพลักษณ์โครงการให้น่าอยู่ (Desire)",
    tasks: {
      daily: ["Curate Organic Content Flow", "Craft Engaging Captions (Hook/Story)", "Active Response (Inbox/Comment SLA < 1hr)", "สรุป Voice of Customer"],
      special: {
        name: "Project Walkthrough Reviews",
        style: "Real User Experience (POV), เน้นความจริงใจ ไม่ขายตรงเกินไป",
        collaboration: "ถ่ายทำ Footage คุณภาพสูง ส่งต่อให้ Boy ตัดต่อ"
      }
    }
  }
];