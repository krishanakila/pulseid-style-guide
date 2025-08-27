// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Dropdown, Button, Typography } from 'antd';

// const items = [
//   { key: '1', label: 'First action' },
//   { key: '2', label: 'Second action' },
//   { key: '3', label: 'Third action' },
// ];

// export default function DropdownPage() {
//   const code = `import { Dropdown, Button } from 'antd';

// const items = [
//   { key: '1', label: 'First action' },
//   { key: '2', label: 'Second action' },
//   { key: '3', label: 'Third action' },
// ];

// export default function Demo(){
//   return (
//     <Dropdown menu={{ items }}>
//       <Button>Open Dropdown</Button>
//     </Dropdown>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Dropdown</Typography.Title>
//       <ComponentCard 
//       title="Dropdown" 
//       description="Use dropdowns for secondary actions or filters." 
//       code={code}
//       mockupSrc="/"         // place file at public/mockups/input.png
//       mockupAlt="Dropdown mockup"
//       mockupCaption="Mockup reference for default input, password, and text area variations.">
//         <Dropdown menu={{ items }}>
//           <Button>Open Dropdown</Button>
//         </Dropdown>
//       </ComponentCard>
//     </AppLayout>
//   );
// }



import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Dropdown, Button, Typography } from 'antd';

const items = [
  { key: '1', label: 'First action' },
  { key: '2', label: 'Second action' },
  { key: '3', label: 'Third action' },
];

export default function DropdownPage() {
  const examples = [
    {
      title: 'Default Dropdown',
      code: `import { Dropdown, Button } from 'antd';

const items = [
  { key: '1', label: 'First action' },
  { key: '2', label: 'Second action' },
  { key: '3', label: 'Third action' },
];

export default function Demo(){
  return (
    <Dropdown menu={{ items }}>
      <Button>Open Dropdown</Button>
    </Dropdown>
  );
}`,
      element: (
        <Dropdown menu={{ items }}>
          <Button>Open Dropdown</Button>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown with Primary Button',
      code: `<Dropdown menu={{ items }}>
  <Button type="primary">Actions</Button>
</Dropdown>`,
      element: (
        <Dropdown menu={{ items }}>
          <Button type="primary">Actions</Button>
        </Dropdown>
      ),
    },
  ];

  // Keep the full demo for later when global Code tab is re-enabled
  const fullCode = `import { Dropdown, Button } from 'antd';

const items = [
  { key: '1', label: 'First action' },
  { key: '2', label: 'Second action' },
  { key: '3', label: 'Third action' },
];

export default function Demo(){
  return (
    <Dropdown menu={{ items }}>
      <Button>Open Dropdown</Button>
    </Dropdown>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title
        level={3}
        className="main-title-inner"
      >
        Dropdown
      </Typography.Title>

      <ComponentCard
        title="Dropdown"
        description="Use dropdowns for secondary actions or filters."
        examples={examples}
        code={fullCode}                 // still stored, in case you re-enable global tab later
        showGlobalCode={false}          // hide the global Code tab (keep per-example Code tabs)
        mockupSrc="/mockups/dropdown.png"   // place file at public/mockups/dropdown.png
        mockupAlt="Dropdown mockup"
        mockupCaption="Mockup reference for dropdown variations with different triggers."
      />
    </AppLayout>
  );
}
