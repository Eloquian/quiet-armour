import Button from './Button';
import './ContentBlocks.css';

export default function ContentBlocks({ blocks }) {
  return (
    <div className="content-blocks">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return <h2 key={i} className="cb-heading">{block.text}</h2>;
          case 'p':
            return <p key={i} className="cb-p">{block.text}</p>;
          case 'quote':
            return (
              <blockquote key={i} className="cb-quote">
                {block.text.split('\n').map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </blockquote>
            );
          case 'list':
            return (
              <ul key={i} className="cb-list">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case 'table':
            return (
              <div className="cb-table-wrap" key={i}>
                <table className="cb-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'timeline':
            return (
              <ol className="cb-timeline" key={i}>
                {block.phases.map((phase, j) => (
                  <li className="cb-timeline-item" key={j}>
                    <span className="cb-timeline-marker">
                      <span className="cb-timeline-dot" />
                      {j < block.phases.length - 1 && <span className="cb-timeline-rail" />}
                    </span>
                    <div className="cb-timeline-content">
                      <p className="cb-timeline-range">{phase.range}</p>
                      <p className="cb-timeline-title">{phase.title}</p>
                      {phase.summary && <p className="cb-timeline-summary">{phase.summary}</p>}
                      {phase.bullets && (
                        <ul className="cb-timeline-bullets">
                          {phase.bullets.map((b, k) => (
                            <li key={k}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {phase.capacity && <p className="cb-timeline-capacity">Capacity: {phase.capacity}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            );
          case 'button':
            return (
              <Button key={i} variant={block.variant || 'primary'} href={block.href}>
                {block.label}
              </Button>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
