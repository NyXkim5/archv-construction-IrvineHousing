import React, { useState } from 'react';
import { Search, Download, FileText, ExternalLink } from 'lucide-react';

const StateForms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('CA');

  const states = ['CA', 'TX', 'FL', 'NY', 'AZ', 'NV', 'WA', 'OR', 'CO'];

  const forms = {
    CA: [
      { id: 1, name: 'Conditional Waiver - Progress Payment', code: 'CA-CW-PP', description: 'Required for progress payments under CA Civil Code §8132' },
      { id: 2, name: 'Unconditional Waiver - Progress Payment', code: 'CA-UW-PP', description: 'Required after payment received - CA Civil Code §8134' },
      { id: 3, name: 'Conditional Waiver - Final Payment', code: 'CA-CW-FP', description: 'Required for final payments under CA Civil Code §8136' },
      { id: 4, name: 'Unconditional Waiver - Final Payment', code: 'CA-UW-FP', description: 'Required after final payment - CA Civil Code §8138' },
      { id: 5, name: 'Preliminary Notice (20-Day)', code: 'CA-PN-20', description: 'Required within 20 days of first furnishing labor/materials' },
      { id: 6, name: 'Notice of Completion', code: 'CA-NOC', description: 'Filed by owner when project is complete' },
    ],
    TX: [
      { id: 1, name: 'Conditional Waiver - Progress Payment', code: 'TX-CW-PP', description: 'Texas Property Code Chapter 53' },
      { id: 2, name: 'Unconditional Waiver - Progress Payment', code: 'TX-UW-PP', description: 'Texas Property Code Chapter 53' },
      { id: 3, name: 'Notice of Intent to Lien', code: 'TX-NIL', description: 'Required before filing lien' },
    ],
  };

  const currentForms = forms[selectedState] || forms.CA;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">State Forms</h1>
        <p className="page-subtitle">State-specific lien waiver and compliance forms</p>
      </div>

      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
        <div className="search-box" style={{ width: '350px' }}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ width: '200px', flexShrink: 0 }}>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #e5e5e5', fontWeight: 600 }}>
              Select State
            </div>
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 16px',
                  textAlign: 'left',
                  background: selectedState === state ? '#111' : '#fff',
                  color: selectedState === state ? '#fff' : '#333',
                  border: 'none',
                  borderBottom: '1px solid #e5e5e5',
                  cursor: 'pointer',
                }}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Form Name</th>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentForms.map((form) => (
                  <tr key={form.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileText size={18} color="#666" />
                        <span className="cell-primary">{form.name}</span>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'monospace', fontSize: '13px' }}>{form.code}</td>
                    <td style={{ color: '#666', fontSize: '14px' }}>{form.description}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                          <Download size={14} />
                          Download
                        </button>
                        <button className="action-btn">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateForms;
