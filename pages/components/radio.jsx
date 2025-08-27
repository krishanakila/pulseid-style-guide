// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Radio, Space, Typography } from 'antd';
// import { useState } from 'react';

// export default function RadioPage() {
//   const [value, setValue] = useState(1);
//   const code = `import { Radio, Space } from 'antd';
// import { useState } from 'react';

// export default function Demo(){
//   const [value, setValue] = useState(1);
//   return (
//     <Space direction="vertical">
//       <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
//         <Radio value={1}>Option A</Radio>
//         <Radio value={2}>Option B</Radio>
//         <Radio value={3}>Option C</Radio>
//       </Radio.Group>
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Radio</Typography.Title>
//       <ComponentCard 
//       title="Radio" 
//       description="Select a single option from a list." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Radio mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy."
//       >
//         <Space direction="vertical">
//           <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
//             <Radio value={1}>Option A</Radio>
//             <Radio value={2}>Option B</Radio>
//             <Radio value={3}>Option C</Radio>
//           </Radio.Group>
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Radio, Space, Typography } from 'antd';
import { useState } from 'react';

export default function RadioPage() {
  const [value, setValue] = useState(1);

  const examples = [
    {
      title: 'Basic Radio Group',
      code: `import { Radio, Space } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [value, setValue] = useState(1);
  return (
    <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
      <Radio value={1}>Option A</Radio>
      <Radio value={2}>Option B</Radio>
      <Radio value={3}>Option C</Radio>
    </Radio.Group>
  );
}`,
      element: (
        <Radio.Group
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
        </Radio.Group>
      ),
    },
    {
      title: 'Vertical Group',
      code: `<Space direction="vertical">
  <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
    <Radio value={1}>Option A</Radio>
    <Radio value={2}>Option B</Radio>
    <Radio value={3}>Option C</Radio>
  </Radio.Group>
</Space>`,
      element: (
        <Space direction="vertical">
          <Radio.Group
            onChange={(e) => setValue(e.target.value)}
            value={value}
          >
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
          </Radio.Group>
        </Space>
      ),
    },
  ];

  // Keep a full demo string for when you re-enable the global Code tab
  const fullCode = `import { Radio, Space } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [value, setValue] = useState(1);
  return (
    <Space direction="vertical">
      <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
      </Radio.Group>
    </Space>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title
        level={3}
        className="main-title-inner"
      >
        Radio
      </Typography.Title>

      <ComponentCard
        title="Radio"
        description="Select a single option from a list."
        examples={examples}
        code={fullCode}
        showGlobalCode={false}          // hide global Code tab (per-example code stays visible)
        mockupSrc="/mockups/radio.png"  // place file at public/mockups/radio.png
        mockupAlt="Radio mockup"
        mockupCaption="Reference for radio button groups and orientations."
      />
    </AppLayout>
  );
}
