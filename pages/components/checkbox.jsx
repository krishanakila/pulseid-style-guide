// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Checkbox, Space, Typography } from 'antd';
// import { useState } from 'react';

// export default function CheckboxPage() {
//   const [checked, setChecked] = useState(true);
//   const code = `import { Checkbox, Space } from 'antd';
// import { useState } from 'react';

// export default function Demo(){
//   const [checked, setChecked] = useState(true);
//   return (
//     <Space direction="vertical">
//       <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}>Checked</Checkbox>
//       <Checkbox>Unchecked</Checkbox>
//       <Checkbox disabled>Disabled</Checkbox>
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Checkbox</Typography.Title>
//       <ComponentCard 
//       title="Checkbox" 
//       description="Use checkboxes for multi-select options." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Checkbox mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy.">
//         <Space direction="vertical">
//           <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}>Checked</Checkbox>
//           <Checkbox>Unchecked</Checkbox>
//           <Checkbox disabled>Disabled</Checkbox>
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Checkbox, Space, Typography } from 'antd';
import { useState } from 'react';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);

  const examples = [
    {
      title: 'Controlled (Checked)',
      code: `import { Checkbox } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}>
      Checked
    </Checkbox>
  );
}`,
      element: (
        <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}>
          Checked
        </Checkbox>
      ),
    },
    {
      title: 'Unchecked',
      code: `<Checkbox>Unchecked</Checkbox>`,
      element: <Checkbox>Unchecked</Checkbox>,
    },
    {
      title: 'Disabled',
      code: `<Checkbox disabled>Disabled</Checkbox>`,
      element: <Checkbox disabled>Disabled</Checkbox>,
    },
    {
      title: 'Vertical Group',
      code: `import { Checkbox, Space } from 'antd';

export default function Demo(){
  return (
    <Space direction="vertical">
      <Checkbox>Option A</Checkbox>
      <Checkbox>Option B</Checkbox>
      <Checkbox>Option C</Checkbox>
    </Space>
  );
}`,
      element: (
        <Space direction="vertical">
          <Checkbox>Option A</Checkbox>
          <Checkbox>Option B</Checkbox>
          <Checkbox>Option C</Checkbox>
        </Space>
      ),
    },
  ];

  // Keep a full demo for when you re-enable the global Code tab later
  const fullCode = `import { Checkbox, Space } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [checked, setChecked] = useState(true);
  return (
    <Space direction="vertical">
      <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}>Checked</Checkbox>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
    </Space>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title level={3} className="main-title-inner">
        Checkbox
      </Typography.Title>

      <ComponentCard
        title="Checkbox"
        description="Use checkboxes for multi-select options."
        examples={examples}
        code={fullCode}               // retained for future use
        showGlobalCode={false}        // hide global Code tab (per-example Code stays visible)
        mockupSrc="/mockups/checkbox.png"   // add image at public/mockups/checkbox.png
        mockupAlt="Checkbox mockup"
        mockupCaption="Reference for checkbox states, disabled, and vertical grouping."
      />
    </AppLayout>
  );
}
