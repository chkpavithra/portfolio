import { solutions } from "@/data/portfolio";

/** Representative mock UI for a SharePoint portal. */
function PortalVisual() {
  return (
    <div className="mock mock-portal" aria-hidden="true">
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-url">contoso.sharepoint.com/sites/intranet</span>
      </div>
      <div className="mock-portal-body">
        <div className="mock-side">
          <span />
          <span />
          <span className="mock-side-active" />
          <span />
        </div>
        <div className="mock-main">
          <div className="mock-hero" />
          <div className="mock-tiles">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mock-lines">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Representative mock UI for an approval flow. */
function FlowVisual() {
  const nodes = ["When an item is created", "Get manager", "Approval", "Update item & notify"];
  return (
    <div className="mock mock-flow" aria-hidden="true">
      {nodes.map((node, i) => (
        <div className="flow-step" key={node}>
          <div className="flow-node">
            <span className="flow-node-dot" />
            {node}
          </div>
          {i < nodes.length - 1 ? <div className="flow-arrow">↓</div> : null}
        </div>
      ))}
    </div>
  );
}

/** Representative mock UI for a Dataverse data model. */
function DataverseVisual() {
  return (
    <div className="mock mock-data" aria-hidden="true">
      <svg viewBox="0 0 300 170" className="data-svg">
        <line x1="80" y1="45" x2="150" y2="80" stroke="#A19F9D" strokeWidth="1.5" />
        <line x1="220" y1="45" x2="150" y2="80" stroke="#A19F9D" strokeWidth="1.5" />
        <line x1="150" y1="105" x2="150" y2="140" stroke="#A19F9D" strokeWidth="1.5" />
      </svg>
      <div className="entity entity-a">
        <strong>Account</strong>
        <span>Name · Industry · Owner</span>
      </div>
      <div className="entity entity-b">
        <strong>Contact</strong>
        <span>Email · Phone · Account</span>
      </div>
      <div className="entity entity-c">
        <strong>Case</strong>
        <span>Title · Status · Priority</span>
      </div>
      <div className="entity entity-d">
        <strong>Activity</strong>
        <span>Type · Due date · Regarding</span>
      </div>
    </div>
  );
}

const VISUALS = [PortalVisual, FlowVisual, DataverseVisual];

export default function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <div className="section-inner">
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="section-title">What I build</h2>
        <p className="section-sub">
          Representative visuals — client work is confidential, so these illustrate the kinds of
          solutions I deliver rather than actual projects.
        </p>

        <div className="solution-grid">
          {solutions.map((card, i) => {
            const Visual = VISUALS[i] ?? PortalVisual;
            return (
              <article className="solution-card" key={card.title}>
                <Visual />
                <div className="solution-body">
                  <p className="solution-product" style={{ color: card.color }}>
                    {card.product}
                  </p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <span className="rep-label">Representative visual</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
