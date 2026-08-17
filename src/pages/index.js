import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Crisp Vector SVG Line Icons
function IconBook(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconCpu(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function IconWorkflow(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <path d="M10 6.5h4" />
      <path d="M6.5 10v4" />
      <path d="M17.5 10v4" />
      <path d="M10 17.5h4" />
    </svg>
  );
}

function IconCode(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconGlobe(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconSliders(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function IconShield(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconCopy(props) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck(props) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const isTh = i18n.currentLocale === 'th';
  const [copied, setCopied] = useState(false);

  const sampleEndpoint = 'curl http://localhost:1010/api/profiles';

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleEndpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout
      title={isTh ? 'คู่มือการใช้งาน GemLogin' : 'GemLogin Documentation'}
      description="Official documentation, guides, and API references for GemLogin anti-detect browser and automation platform.">
      
      <div className={styles.mainWrapper}>
        {/* Subtle Ambient Background Mesh */}
        <div className={styles.ambientBackground} />

        {/* Header / Hero Section */}
        <header className={styles.heroHeader}>
          <div className={styles.container}>
            <div className={styles.headerContent}>
              {/* Interactive Live Status Badge */}
              <div className={styles.badgeWrapper}>
                <span className={styles.pulseDot} />
                <span className={styles.badgeText}>GemLogin v3.1</span>
                <span className={styles.badgeDivider}>•</span>
                <span className={styles.badgeSub}>
                  {isTh ? 'ระบบเอกสารคู่มือทางการ' : 'Official Documentation Hub'}
                </span>
              </div>

              <Heading as="h1" className={styles.mainTitle}>
                {isTh ? 'คู่มือการใช้งาน GemLogin' : 'GemLogin Documentation'}
              </Heading>

              <p className={styles.mainSubtitle}>
                {isTh
                  ? 'เอกสารแนะนำขั้นตอนการใช้งานระบบจำลองลายนิ้วมือเบราว์เซอร์ การเชื่อมต่อ Proxy การสร้าง Workflow อัตโนมัติ และการเชื่อมต่อผ่าน REST API'
                  : 'Complete guides and technical specifications for browser profile virtualization, fingerprint masking, visual automation workflows, and REST API.'}
              </p>

              {/* Action Buttons */}
              <div className={styles.quickActions}>
                <Link className={styles.primaryBtn} to="/docs/category/general-information">
                  <IconBook />
                  <span>{isTh ? 'เริ่มต้นอ่านคู่มือ' : 'Getting Started'}</span>
                </Link>
                <Link className={styles.secondaryBtn} to="/docs/API">
                  <IconCode style={{ width: 16, height: 16 }} />
                  <span>{isTh ? 'คู่มือ REST API' : 'REST API Reference'}</span>
                </Link>
                <Link className={styles.secondaryBtn} to="/docs/Frequently Asked Questions/">
                  <span>{isTh ? 'คำถามที่พบบ่อย (FAQs)' : 'FAQs'}</span>
                </Link>
              </div>

              {/* Interactive Quick-Copy API Snippet Bar */}
              <div className={styles.copySnippetBar}>
                <div>
                  <span className={styles.snippetPrefix}>$</span>
                  <span className={styles.snippetCode}>{sampleEndpoint}</span>
                </div>
                <button
                  className={`${styles.copyButton} ${copied ? styles.copiedSuccess : ''}`}
                  onClick={handleCopy}
                  type="button">
                  {copied ? <IconCheck /> : <IconCopy />}
                  <span>{copied ? (isTh ? 'คัดลอกแล้ว' : 'Copied!') : (isTh ? 'คัดลอกคำสั่ง' : 'Copy')}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Documentation Blocks (3 Columns) */}
        <section className={styles.container}>
          <div className={styles.featuredGrid}>
            <Link className={styles.featuredCard} to="/docs/tutorial-basics/Profile/Create Profile">
              <div className={styles.cardIcon}>
                <IconCpu />
              </div>
              <div className={styles.cardTitle}>
                {isTh ? 'การจัดการ Browser Profile' : 'Profile & Fingerprints'}
              </div>
              <div className={styles.cardDesc}>
                {isTh
                  ? 'ขั้นตอนการสร้างโปรไฟล์เดี่ยวและกลุ่ม การจำลองลายนิ้วมือฮาร์ดแวร์ Canvas, WebGL, WebRTC และ User-Agent'
                  : 'Create single or batch profiles with granular hardware fingerprint emulation for Canvas, WebGL, WebRTC, and OS matching.'}
              </div>
              <div className={styles.cardAction}>
                <span>{isTh ? 'ดูขั้นตอนการสร้าง' : 'View Guide'}</span>
                <span className={styles.actionIcon}><IconArrowRight /></span>
              </div>
            </Link>

            <Link className={styles.featuredCard} to="/docs/tutorial-basics/Workflows/">
              <div className={styles.cardIcon}>
                <IconWorkflow />
              </div>
              <div className={styles.cardTitle}>
                {isTh ? 'ระบบ Workflow Automation' : 'Workflow Automation'}
              </div>
              <div className={styles.cardDesc}>
                {isTh
                  ? 'สร้างชุดคำสั่งและผังงานอัตโนมัติด้วย Visual Canvas Editor พร้อมการตั้งเวลา Task และเธรดการประมวลผล'
                  : 'Design automated flows on a visual canvas editor, schedule execution intervals, and manage concurrent threads.'}
              </div>
              <div className={styles.cardAction}>
                <span>{isTh ? 'ดูวิธีสร้าง Workflow' : 'View Workflows'}</span>
                <span className={styles.actionIcon}><IconArrowRight /></span>
              </div>
            </Link>

            <Link className={styles.featuredCard} to="/docs/API">
              <div className={styles.cardIcon}>
                <IconCode />
              </div>
              <div className={styles.cardTitle}>
                {isTh ? 'REST API สำหรับนักพัฒนา' : 'Developer REST API'}
              </div>
              <div className={styles.cardDesc}>
                {isTh
                  ? 'ควบคุมการเปิด ปิด สร้างโปรไฟล์ และสั่งรันสคริปต์อัตโนมัติผ่าน Local HTTP API ด้วยภาษา Python, Node.js, C#'
                  : 'Programmatically launch, stop, create, and configure profiles using standard HTTP endpoints in Python or JavaScript.'}
              </div>
              <div className={styles.cardAction}>
                <span>{isTh ? 'ดูเอกสาร API' : 'Explore API'}</span>
                <span className={styles.actionIcon}><IconArrowRight /></span>
              </div>
            </Link>
          </div>
        </section>

        {/* Categorized Documentation Directory (2 Columns) */}
        <section className={styles.container}>
          <div className={styles.sectionHeaderWrapper}>
            <Heading as="h2" className={styles.sectionHeading}>
              {isTh ? 'หมวดหมู่เอกสารทั้งหมด' : 'Documentation Directory'}
            </Heading>
          </div>

          <div className={styles.directoryGrid}>
            {/* Panel 1: Profile & Network */}
            <div className={styles.categoryPanel}>
              <div className={styles.categoryHeader}>
                <IconShield />
                <h3>{isTh ? 'โปรไฟล์และเครือข่าย' : 'Profiles & Network'}</h3>
              </div>
              <ul className={styles.docList}>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Profile/Create Profile">
                    <span>{isTh ? 'การสร้างและตั้งค่าโปรไฟล์ (Create Profile)' : 'Create Profile & Configuration'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Profile/Proxy">
                    <span>{isTh ? 'การเชื่อมต่อและตรวจสอบ Proxy' : 'Proxy Management & Verification'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Profile/Actions">
                    <span>{isTh ? 'การสำรองข้อมูลและส่งออกคุกกี้ (Profile Actions)' : 'Backup, Recovery & Export Cookies'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Profile/Browser">
                    <span>{isTh ? 'การลบแคช สุ่ม Fingerprint และเปลี่ยน OS' : 'Browser Actions & Fingerprint Reset'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Panel 2: Automation & Data */}
            <div className={styles.categoryPanel}>
              <div className={styles.categoryHeader}>
                <IconWorkflow />
                <h3>{isTh ? 'ระบบอัตโนมัติและฐานข้อมูล' : 'Automation & Data'}</h3>
              </div>
              <ul className={styles.docList}>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Workflows/">
                    <span>{isTh ? 'การสร้างสคริปต์เวิร์กโฟลว์ (Workflows)' : 'Visual Workflow Canvas'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Tasks/">
                    <span>{isTh ? 'การสร้างชุดงานและตั้งเวลา (Tasks)' : 'Task Execution & Scheduling'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Database/">
                    <span>{isTh ? 'ตารางข้อมูล ตัวแปร และ Credentials (Database)' : 'Data Tables, Variables & Credentials'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Extension/">
                    <span>{isTh ? 'การจัดการส่วนขยายเบราว์เซอร์ (Extension)' : 'Chrome Extensions Management'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Panel 3: Settings & Configuration */}
            <div className={styles.categoryPanel}>
              <div className={styles.categoryHeader}>
                <IconSliders />
                <h3>{isTh ? 'การตั้งค่าระบบ' : 'Settings & Preferences'}</h3>
              </div>
              <ul className={styles.docList}>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Settings/General">
                    <span>{isTh ? 'การตั้งค่าทั่วไป (General Settings)' : 'General Settings & Kernel'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Settings/Browser">
                    <span>{isTh ? 'ค่าเริ่มต้นเบราว์เซอร์และ Chrome Flags' : 'Browser Defaults & Launch Flags'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Settings/Automation">
                    <span>{isTh ? 'ตั้งค่าเธรดและขนาดหน้าต่าง (Automation Settings)' : 'Thread Limits & Window Positioning'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/tutorial-basics/Settings/Shortcuts">
                    <span>{isTh ? 'ตารางคีย์ลัดสั่งงาน (Keyboard Shortcuts)' : 'Keyboard Shortcuts Reference'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Panel 4: Integration & Support */}
            <div className={styles.categoryPanel}>
              <div className={styles.categoryHeader}>
                <IconGlobe />
                <h3>{isTh ? 'การเชื่อมต่อและการจัดการบัญชี' : 'Integration & Device'}</h3>
              </div>
              <ul className={styles.docList}>
                <li>
                  <Link className={styles.docItemLink} to="/docs/API">
                    <span>{isTh ? 'คู่มือ REST API Reference' : 'REST API Reference'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/Change Login Device">
                    <span>{isTh ? 'ขั้นตอนการเปลี่ยนเครื่องใช้งาน (Change Login Device)' : 'Change Login Device Instructions'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/Frequently Asked Questions/">
                    <span>{isTh ? 'คำถามที่พบบ่อยและการแก้ปัญหา (FAQs)' : 'Frequently Asked Questions (FAQs)'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.docItemLink} to="/docs/category/general-information">
                    <span>{isTh ? 'บล็อกคำสั่ง Automation ทั้งหมด (General Information)' : 'Automation Blocks Index'}</span>
                    <span className={styles.docItemArrow}><IconArrowRight /></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Support Strip */}
        <section className={styles.container}>
          <div className={styles.supportStrip}>
            <div className={styles.supportText}>
              <h4>{isTh ? 'ต้องการความช่วยเหลือเพิ่มเติม?' : 'Need Additional Assistance?'}</h4>
              <p>
                {isTh
                  ? 'ตรวจสอบคำตอบสำหรับปัญหาที่พบบ่อยเกี่ยวกับการเชื่อมต่อ พร็อกซี หรือการย้ายอุปกรณ์'
                  : 'Find quick solutions for proxy connectivity, fingerprint verification, or device migration.'}
              </p>
            </div>
            <Link className={styles.supportLink} to="/docs/Frequently Asked Questions/">
              <span>{isTh ? 'เปิดดูคำถามที่พบบ่อย' : 'View FAQ Section'}</span>
              <IconArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
