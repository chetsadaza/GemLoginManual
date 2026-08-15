import React from 'react';
import styles from './styles.module.css';

export default function DeviceTransferGuide({ locale = 'th' }) {
  const isTh = locale === 'th';

  return (
    <div className={styles.guideContainer}>
      {/* Header Description */}
      <div className={styles.headerSection}>
        <p className={styles.description}>
          {isTh 
            ? 'ใน 1 แพ็กเกจจะสามารถเข้าใช้งานโปรแกรมได้เพียง 1 เครื่องเท่านั้น แต่หากต้องการเข้าใช้งานในเครื่องใหม่สามารถทำตามวิธีการนี้เพื่อเปลี่ยนเครื่องใช้งาน'
            : 'GemLogin packages allow access on 1 active device at a time. Follow the instructions below to transfer your license to a new computer.'}
        </p>
      </div>

      {/* Caution Callout Box */}
      <div className={styles.cautionBox}>
        <div className={styles.cautionIcon}>⚠️</div>
        <div className={styles.cautionText}>
          <span className={styles.cautionTitle}>
            {isTh ? 'ข้อควรระวังก่อนการย้ายเครื่อง' : 'Important Notice Before Migration'}
          </span>
          {isTh 
            ? 'ในการย้ายอุปกรณ์แนะนำให้ทำการแบ็คอัพข้อมูลจากอุปกรณ์เครื่องเดิมก่อน เนื่องจากโปรแกรม GemLogin เก็บข้อมูลไว้ภายในเครื่อง (Local Storage) การย้ายอุปกรณ์ไปเครื่องใหม่โดยไม่แบ็คอัพข้อมูล จะไม่มีข้อมูลจากเครื่องเก่าแสดงในเครื่องใหม่'
            : 'Before transferring devices, we recommend backing up your data from the old device. GemLogin stores data locally (Local Storage), so switching devices without backing up will not transfer your local profiles to the new machine.'}
        </div>
      </div>

      {/* Step by Step Timeline */}
      <div className={styles.stepList}>
        {/* Step 1 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'วิธีการย้ายอุปกรณ์ — ล็อกอินเข้าสู่ระบบ' : 'Step 1: Log in to GemLogin'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                ล็อกอินบัญชี GemLogin ผ่านเว็บไซต์ <a href="https://app.gemlogin.io/login" target="_blank" rel="noopener noreferrer">https://app.gemlogin.io/login</a> หรือไปที่หน้า Manage License ที่แถบเมนูด้านซ้ายในโปรแกรม (เฉพาะเวอร์ชัน 3.0.4 ขึ้นไป)
              </>
            ) : (
              <>
                Log in to your GemLogin account via website <a href="https://app.gemlogin.io/login" target="_blank" rel="noopener noreferrer">https://app.gemlogin.io/login</a> or navigate to Manage License on the left menu inside the desktop app (v3.0.4+).
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step1-login.jpg" alt="Step 1 Login" loading="lazy" />
          </div>
        </div>

        {/* Step 2 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>2</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'เลือกเมนู "การจัดการบริการ"' : 'Step 2: Go to "Service Management"'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                ที่แถบเมนูด้านซ้าย ให้คลิกที่ปุ่ม <span className={styles.badgeBlue}>การจัดการบริการ</span>
              </>
            ) : (
              <>
                On the left sidebar menu, click on <span className={styles.badgeBlue}>Service Management</span>.
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step2-manage-service.jpg" alt="Step 2 Service Management" loading="lazy" />
          </div>
        </div>

        {/* Step 3 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'เปิดหน้าจัดการอุปกรณ์' : 'Step 3: Click the Green Eye Icon'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                คลิกที่ <span className={styles.badgeGreen}>เครื่องหมายดวงตาสีเขียว</span> ในคอลัมน์ Action ของแพ็กเกจสิทธิ์ที่ต้องการย้าย
              </>
            ) : (
              <>
                Locate your package in the table and click on the <span className={styles.badgeGreen}>Green Eye Icon</span> under the Action column.
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step3-action-eye.jpg" alt="Step 3 Action Eye Icon" loading="lazy" />
          </div>
        </div>

        {/* Step 4 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>4</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'ลบอุปกรณ์เครื่องเก่าออก' : 'Step 4: Delete the Old Device'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                ในหน้าต่าง Manage Device ให้คลิกที่ <span className={styles.badgeRed}>เครื่องหมายถังขยะสีแดง</span> เพื่อทำการลบอุปกรณ์เครื่องเก่าออก
              </>
            ) : (
              <>
                In the Manage Device popup, click the <span className={styles.badgeRed}>Red Trash Icon</span> to remove the old device.
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step4-delete-device.jpg" alt="Step 4 Delete Device" loading="lazy" />
          </div>
        </div>

        {/* Step 5 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>5</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'คัดลอก Device ID จากเครื่องใหม่' : 'Step 5: Copy Device ID on New PC'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                เข้าโปรแกรม GemLogin ในอุปกรณ์เครื่องใหม่ที่ต้องการย้ายไป จากนั้นให้คัดลอก <strong>Device ID</strong> (มุมขวาล่างของหน้าล็อกอินในแอป)
              </>
            ) : (
              <>
                Open the GemLogin application on your new computer and copy the <strong>Device ID</strong> displayed at the bottom right of the login screen.
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step5-device-id.jpg" alt="Step 5 Copy Device ID" loading="lazy" />
          </div>
        </div>

        {/* Step 6 */}
        <div className={styles.stepItem}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>6</span>
            <h3 className={styles.stepTitle}>
              {isTh ? 'วาง Device ID และกด Add Device' : 'Step 6: Paste Device ID & Click Add Device'}
            </h3>
          </div>
          <p className={styles.stepDesc}>
            {isTh ? (
              <>
                กลับมาที่ Manage Device ใส่ Device ID ที่คัดลอกมาลงในช่องแรก จากนั้นให้กดที่ปุ่ม <span className={styles.badgeBlue}>+ Add Device</span>
              </>
            ) : (
              <>
                Return to the Manage Device popup, paste the copied Device ID into the first input field, and click <span className={styles.badgeBlue}>+ Add Device</span>.
              </>
            )}
          </p>
          <div className={styles.imageWrapper}>
            <img src="/img/change-device/step6-add-device.jpg" alt="Step 6 Add Device" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
