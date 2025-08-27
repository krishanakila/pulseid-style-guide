// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Switch, Space, Typography } from 'antd';
// import { useState } from 'react';

// export default function SwitchPage() {
//   const [on, setOn] = useState(true);
//   const code = `import { Switch, Space } from 'antd';
// import { useState } from 'react';

// export default function Demo(){
//   const [on, setOn] = useState(true);
//   return (
//     <Space>
//       <Switch checked={on} onChange={setOn} />
//       <Switch size="small" />
//       <Switch disabled />
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Switch</Typography.Title>
//       <ComponentCard 
//       title="Switch" 
//       description="Toggle between states." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Switch mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy."
//       >
//         <Space>
//           <Switch checked={on} onChange={setOn} />
//           <Switch size="small" />
//           <Switch disabled />
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Switch, Space, Typography } from 'antd';
import { useState } from 'react';

export default function SwitchPage() {
  const [on, setOn] = useState(true);

  const examples = [
    {
      title: 'Controlled Switch',
      code: `import { Switch } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} />;
}`,
      element: <Switch checked={on} onChange={setOn} />,
    },
    {
      title: 'Small Switch',
      code: `<Switch size="small" />`,
      element: <Switch size="small" />,
    },
    {
      title: 'Disabled Switch',
      code: `<Switch disabled />`,
      element: <Switch disabled />,
    },
    {
      title: 'Inline Group',
      code: `import { Switch, Space } from 'antd';

export default function Demo(){
  return (
    <Space>
      <Switch defaultChecked />
      <Switch size="small" />
      <Switch disabled />
    </Space>
  );
}`,
      element: (
        <Space>
          <Switch defaultChecked />
          <Switch size="small" />
          <Switch disabled />
        </Space>
      ),
    },
  ];

  // Keep a full demo string for when you re-enable the global Code tab
  const fullCode = `import { Switch, Space } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [on, setOn] = useState(true);
  return (
    <Space>
      <Switch checked={on} onChange={setOn} />
      <Switch size="small" />
      <Switch disabled />
    </Space>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title
        level={3}
        className="main-title-inner"
      >
        Switch
      </Typography.Title>

      <ComponentCard
        title="Switch"
        description="Toggles between enabled/disabled or on/off states."
        examples={examples}
        code={fullCode}                  // retained for later
        showGlobalCode={false}           // hide global Code tab (per-example code stays visible)
        mockupSrc="/mockups/switch.png"  // add image at public/mockups/switch.png
        mockupAlt="Switch mockup"
        mockupCaption="Reference for switch states, sizing, and disabled variations."
      />
    </AppLayout>
  );
}
