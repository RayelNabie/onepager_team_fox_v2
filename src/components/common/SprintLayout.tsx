import type { ReactNode } from "react";

interface SprintLayoutProps {
  sprintNumber: number;
  subtitle?: string;
  timelineLabel?: string;
  visual?: ReactNode;
  children: ReactNode;
  footerTitle?: string;
  footerContent?: ReactNode;
}

const SprintLayout = ({
  sprintNumber,
  subtitle,
  timelineLabel,
  visual,
  children,
  footerTitle,
  footerContent,
}: SprintLayoutProps) => {
  return (
    <section className={`sprint${sprintNumber} sprint-layout`}>
      <div className={`sprint${sprintNumber}__content sprint-layout__content`}>
        {visual && (
          <div
            className={`sprint${sprintNumber}__visual-container sprint-layout__visual-container`}
          >
            {visual}
          </div>
        )}
        <div className={`sprint${sprintNumber}__header sprint-layout__header`}>
          <h1 className={`sprint${sprintNumber}__title sprint-layout__title`}>
            Sprint {sprintNumber}
          </h1>
          {subtitle && (
            <h4 className={`sprint${sprintNumber}__subtitle sprint-layout__subtitle`}>
              {subtitle}
            </h4>
          )}
        </div>

        <div className={`sprint${sprintNumber}__grid sprint-layout__grid`}>
          {timelineLabel && (
            <div className={`sprint${sprintNumber}__timeline-label sprint-layout__timeline-label`}>
              {timelineLabel}
            </div>
          )}
          {children}
        </div>

        {(footerTitle || footerContent) && (
          <div className={`sprint${sprintNumber}__footer sprint-layout__footer`}>
            {footerTitle && <h4>{footerTitle}</h4>}
            {footerContent}
          </div>
        )}
      </div>
    </section>
  );
};

export const SprintDivider = ({
  direction,
  sprintNumber,
}: {
  direction: "left" | "right";
  sprintNumber: number;
}) => (
  <div
    className={`sprint${sprintNumber}__divider sprint${sprintNumber}__divider--${direction} sprint-layout__divider sprint-layout__divider--${direction}`}
  >
    <div className={`sprint${sprintNumber}__stalk sprint-layout__stalk`}></div>
    <div className={`sprint${sprintNumber}__dot sprint-layout__dot`}></div>
  </div>
);

export default SprintLayout;
