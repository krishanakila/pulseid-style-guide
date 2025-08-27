// import { Card, Tabs, Button, message, Space, Typography, Image } from 'antd';
// import { CopyOutlined } from '@ant-design/icons';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// export default function ComponentCard({
//   title,
//   description,
//   code,
//   children,
//   notes,
//   mockupSrc,       // <-- NEW (optional)
//   mockupAlt,       // <-- NEW (optional)
//   mockupCaption,   // <-- NEW (optional)
// }) {
//   const onCopy = async () => {
//     try {
//       await navigator.clipboard.writeText((code || '').trim());
//       message.success('Code copied');
//     } catch {
//       message.error('Copy failed');
//     }
//   };

//   const items = [
//     {
//       key: 'preview',
//       label: 'Preview',
//       children: <div style={{ padding: 12 }}>{children}</div>,
//     },
//     {
//       key: 'code',
//       label: 'Code',
//       children: (
//         <div
//           style={{
//             background: '#0b1220',
//             borderRadius: 12,
//             border: '1px solid rgba(148,163,184,.2)',
//           }}
//         >
//           <SyntaxHighlighter language="jsx">
//             {(code || '').trim()}
//           </SyntaxHighlighter>
//         </div>
//       ),
//     },
//   ];

//   // Add Mockup tab only when a mockup image is provided
//   if (mockupSrc) {
//     items.push({
//       key: 'mockup',
//       label: 'Mockup',
//       children: (
//         <div style={{ padding: 12 }}>
//           <Image
//             src={mockupSrc}
//             alt={mockupAlt || title || 'Mockup'}
//             style={{ width: '100%', borderRadius: 8 }}
//           />
//           {mockupCaption && (
//             <Typography.Paragraph type="secondary" style={{ marginTop: 8 }}>
//               {mockupCaption}
//             </Typography.Paragraph>
//           )}
//         </div>
//       ),
//     });
//   }

//   if (notes) {
//     items.push({
//       key: 'notes',
//       label: 'Notes',
//       children: <div style={{ padding: 12 }}>{notes}</div>,
//     });
//   }

//   return (
//     <Card
//       title={
//         <Space direction="vertical" size={0}>
//           <Typography.Text strong style={{ fontSize: 16 }}>
//             {title}
//           </Typography.Text>
//           {description && (
//             <Typography.Text type="secondary">{description}</Typography.Text>
//           )}
//         </Space>
//       }
//       extra={
//         <Button icon={<CopyOutlined />} onClick={onCopy}>
//           Copy
//         </Button>
//       }
//       style={{ marginBottom: 16 }}
//     >
//       <Tabs items={items} />
//     </Card>
//   );
// }



import { useState } from 'react';
import { Card, Tabs, Button, message, Space, Typography, Image, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function ComponentCard({
  title,
  description,
  code,          // full demo code (global Code tab)
  children,      
  notes,
  mockupSrc,
  mockupAlt,
  mockupCaption,
  examples,      
  showGlobalCode = false,
}) {
  const [activeKey, setActiveKey] = useState('preview');

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText((text || '').trim());
      message.success('Code copied');
    } catch {
      message.error('Copy failed');
    }
  };

  const PreviewPane = () => {
    if (!examples || examples.length === 0) {
      return <div style={{ padding: 12 }}>{children}</div>;
    }

    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {examples.map((ex, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              border: '1px solid rgba(148,163,184,.2)',
              borderRadius: 10,
              background: '#0f172a',
              overflow: 'hidden'
            }}
          >
            {/* Header with optional title and per-example copy */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderBottom: '1px solid rgba(148,163,184,.15)'
              }}
            >
              <Typography.Text style={{ color: '#cbd5e1', fontWeight: 600 }}>
                {ex.title || `Example ${idx + 1}`}
              </Typography.Text>
              <Tooltip title="Copy code">
                <Button
                  type="text"
                  size="small"
                  icon={<CopyOutlined />}
                  onClick={() => copy(ex.code)}
                  style={{ color: '#94a3b8' }}
                />
              </Tooltip>
            </div>

            {/* Per-example tabs: Preview | Code */}
            <div style={{ padding: 12 }}>
              <Tabs
                size="small"
                items={[
                  {
                    key: 'preview',
                    label: 'Preview',
                    children: <div style={{ padding: 6 }}>{ex.element}</div>
                  },
                  {
                    key: 'code',
                    label: 'Code',
                    children: (
                      <div
                        style={{
                          background: '#0b1220',
                          borderRadius: 8,
                          border: '1px solid rgba(148,163,184,.2)'
                        }}
                      >
                        <SyntaxHighlighter language="jsx">
                          {(ex.code || '').trim()}
                        </SyntaxHighlighter>
                      </div>
                    )
                  }
                ]}
                defaultActiveKey="preview"
              />
            </div>
          </div>
        ))}
      </Space>
    );
  };

  const tabs = [
    { key: 'preview', label: 'Preview', children: <PreviewPane /> },
    ...(showGlobalCode ? [{
      key: 'code',
      label: 'Code',
      children: (
        <div style={{ background:'#0b1220', borderRadius:12, border:'1px solid rgba(148,163,184,.2)' }}>
          <SyntaxHighlighter language="jsx">{(code || '').trim()}</SyntaxHighlighter>
       </div>
      )
    }] : [])
  ];

  if (mockupSrc) {
    tabs.push({
      key: 'mockup',
      label: 'Mockup',
      children: (
        <div style={{ padding: 12 }}>
          <Image
            src={mockupSrc}
            alt={mockupAlt || title || 'Mockup'}
            style={{ width: '100%', borderRadius: 8 }}
          />
          {mockupCaption && (
            <Typography.Paragraph type="secondary" style={{ marginTop: 8 }}>
              {mockupCaption}
            </Typography.Paragraph>
          )}
        </div>
      )
    });
  }

  if (notes) {
    tabs.push({
      key: 'notes',
      label: 'Notes',
      children: <div style={{ padding: 12 }}>{notes}</div>
    });
  }

  return (
    <Card
      title={
        <Space direction="vertical" size={0}>
          <Typography.Text strong style={{ fontSize: 16 }}>
            {title}
          </Typography.Text>
          {description && (
            <Typography.Text type="secondary">{description}</Typography.Text>
          )}
        </Space>
      }
      style={{ marginBottom: 16 }}
    >
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={tabs} />
    </Card>
  );
}
