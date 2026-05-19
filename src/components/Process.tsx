"use client";

import { type JSX, useState } from "react";
import Sprint0 from "@/components/sprints/Sprint0";
import Sprint1 from "@/components/sprints/Sprint1";
import Sprint2 from "@/components/sprints/Sprint2";
import Sprint3 from "@/components/sprints/Sprint3";
import Sprint4 from "@/components/sprints/Sprint4";
import { Sprint } from "@/enums/sprintEnum";
import useProcessAnimation from "@/hooks/useProcessAnimation";

const sprintComponents: Partial<Record<Sprint, JSX.Element>> = {
  [Sprint.Sprint0]: <Sprint0 />,
  [Sprint.Sprint1]: <Sprint1 />,
  [Sprint.Sprint2]: <Sprint2 />,
  [Sprint.Sprint3]: <Sprint3 />,
  [Sprint.Sprint4]: <Sprint4 />,
};

const Process = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Sprint>(Sprint.Sprint4);
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
                onChange={(e) => setActiveTab(e.target.value as Sprint)}
              >
                {Object.values(Sprint).map((sprint) => (
                  <option key={sprint} value={sprint}>
                    {sprint}
                  </option>
                ))}
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
            </div>
          </div>
          <div className="process__card">
            <div className="process__card-inner">
              {sprintComponents[activeTab] ?? <p>Selecteer een sprint om de inhoud te bekijken.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
