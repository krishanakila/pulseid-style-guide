// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Button, Space, Typography } from 'antd';

// export default function ButtonPage() {
//   const code = `import { Button, Space } from 'antd';

// export default function Demo(){
//   return (
//     <Space wrap>
//       <Button type="primary">Primary</Button>
//       <Button>Default</Button>
//       <Button type="dashed">Dashed</Button>
//       <Button type="text">Text</Button>
//       <Button type="link">Link</Button>
//       <Button danger>Danger</Button>
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title
//         level={3}
//         style={{ margin: '0 0 20px 0', color: '#fff' }}
//       >
//         Buttons
//       </Typography.Title>

//       <ComponentCard
//         title="Buttons"
//         description="Use buttons to trigger actions. Choose hierarchy (primary/secondary/tertiary) based on importance."
//         code={code}
//         mockupSrc="/"            // put an image at public/mockups/buttons.png
//         mockupAlt="Buttons mockup"
//         mockupCaption="High-fidelity reference for primary, default, dashed, text, link, and danger states."
//       >
//         <Space wrap>
//           <Button type="primary">Primary</Button>
//           <Button>Default</Button>
//           <Button type="dashed">Dashed</Button>
//           <Button type="text">Text</Button>
//           <Button type="link">Link</Button>
//           <Button danger>Danger</Button>
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Button, Typography } from 'antd';

export default function ButtonPage() {
  const examples = [
    { title: 'Primary Button', code: `<Button type="primary" className='primary-btn'>Button</Button>`, element: <Button type="primary" className='primary-btn'>Button</Button> },
    { title: 'Primary Button - Disabled', code: `<Button type="primary" className='primary-btn disabled'>Button</Button>`, element: <Button type="primary" className='primary-btn disabled'>Button</Button>  },
    { title: 'Secondary Button',  code: `<Button className='secondary-btn'>Button</Button>`, element: <Button className='secondary-btn'>Button</Button> },
    { title: 'Secondary Button - Disabled', code: `<Button className='secondary-btn disabled'>Button</Button>`, element: <Button className='secondary-btn disabled'>Button</Button> },
  ];

  return (
    <AppLayout>
      <Typography.Title level={3} className="main-title-inner">
        Buttons
      </Typography.Title>

      <ComponentCard
        title="Buttons"
        description="Each variation has its own Preview/Code and copy action."
        examples={examples}
        code={` <Button type="primary">Primary Button</Button>`}
        mockupSrc="/mockups/buttons.svg"
        mockupAlt="Buttons mockup"
        //showGlobalCode={false}   //Individual components activate the code tab
      />
    </AppLayout>
  );
}
