"use client";

import { type JSX, useState } from "react";
import Image from "next/image";
import Sprint0 from "@/components/sprints/Sprint0";
import Sprint1 from "@/components/sprints/Sprint1";
import Sprint2 from "@/components/sprints/Sprint2";
import Sprint3 from "@/components/sprints/Sprint3";
import Sprint4 from "@/components/sprints/Sprint4";
import Doorontwikkeling from "@/components/sprints/Doorontwikkeling";
import { Sprint } from "@/enums/sprintEnum";
import useProcessAnimation from "@/hooks/useProcessAnimation";
import DoorontwikkelingIcon from "@public/process_doorontwikkeling_icon.svg";
import Sprint5 from "@/components/sprints/Sprint5";

const sprintComponents: Partial<Record<Sprint, JSX.Element>> = {
  [Sprint.Sprint0]: <Sprint0 />,
  [Sprint.Sprint1]: <Sprint1 />,
  [Sprint.Sprint2]: <Sprint2 />,
  [Sprint.Sprint3]: <Sprint3 />,
  [Sprint.Sprint4]: <Sprint4 />,
  [Sprint.Sprint5]: <Sprint5 />,
};

const DOORONTWIKKELING = "doorontwikkeling" as const;
type ActiveTab = Sprint | typeof DOORONTWIKKELING;

const Process = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(Sprint.Sprint5);
  const containerRef = useProcessAnimation();

  return (
    <section className="process" id="proces" ref={containerRef}>
      <div className="process__container">
        <h2 className="process__title">Het proces</h2>
        <div>
          <div className="process__controls">
            {/* Mobile Dropdown */}
            <div className="process__dropdown-wrapper">
              <select
                className="process__dropdown"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value as ActiveTab)}
              >
                {Object.values(Sprint).map((sprint) => (
                  <option key={sprint} value={sprint}>
                    {sprint}
                  </option>
                ))}
                <option value={DOORONTWIKKELING}>Doorontwikkeling</option>
              </select>
            </div>
            {/* Desktop Tabs */}
            <div className="process__tabs">
              {Object.values(Sprint).map((sprint) => (
                <button
                  type="button"
                  key={sprint}
                  className={`process__tab ${activeTab === sprint ? "process__tab--active" : ""}`}
                  onClick={() => setActiveTab(sprint)}
                >
                  {sprint}
                </button>
              ))}
              <button
                type="button"
                className={`process__tab process__tab--icon ${activeTab === DOORONTWIKKELING ? "process__tab--active" : ""}`}
                onClick={() => setActiveTab(DOORONTWIKKELING)}
                aria-label="Doorontwikkeling"
              >
                <Image src={DoorontwikkelingIcon} alt="" width={18} height={18} />
              </button>
            </div>
          </div>
          <div className="process__card">
            <div className="process__card-inner">
              {activeTab === DOORONTWIKKELING ? (
                <Doorontwikkeling />
              ) : (
                (sprintComponents[activeTab] ?? (
                  <p>Selecteer een sprint om de inhoud te bekijken.</p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
