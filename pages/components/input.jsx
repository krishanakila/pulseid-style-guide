// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Input, Space, Typography } from 'antd';

// export default function InputPage() {
//   const code = `import { Input, Space } from 'antd';

// export default function Demo(){
//   return (
//     <Space direction="vertical" style={{ width: 360 }}>
//       <Input placeholder="Default Input" />
//       <Input.Password placeholder="Password" />
//       <Input.TextArea placeholder="Text Area" autoSize />
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title 
//       level={3} 
//       style={{ margin: '0 0 20px 0', color: "#fff" }}>Input</Typography.Title>
//       <ComponentCard 
//       title="Inputs" 
//       description="Form inputs for text, passwords and long text." 
//       code={code}
//       mockupSrc="/mockups/input.png"         // place file at public/mockups/input.png
//       mockupAlt="Input mockup"
//       mockupCaption="Mockup reference for default input, password, and text area variations.">
//         <Space direction="vertical" style={{ width: 360 }}>
//           <Input placeholder="Default Input" />
//           <Input.Password placeholder="Password" />
//           <Input.TextArea placeholder="Text Area" autoSize />
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }



import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Input, Typography, Form } from 'antd';

export default function InputPage() {
  const examples = [
    {
      title: 'Default Input',
      code: ` <Form>
  <div className="form-label">   
   <label className="primary-form-label">Enter your name 
      <span className="form-label-error">*</span>
      <span className="primary-form-des">Select the language for this content</span>
   </label>
      <Input placeholder="Primary Input" className='primary-form-input'/>
  </div>
</Form>`,
      element: 
          <Form style={{ width: 360 }}>
            <div className="form-label">
              <label className="primary-form-label">
                  Enter your name <span className="form-label-error">*</span>
                  <span className="primary-form-des">Select the language for this content</span>
              </label>
              <Input placeholder="Primary Input" className='primary-form-input'/>
              </div>
          </Form>,
    },
    {
      title: 'Password',
      code: `<Input.Password placeholder="Password" />`,
      element: <div style={{ width: 360 }}><Input.Password placeholder="Password" /></div>,
    },
    {
      title: 'Text Area',
      code: `<Input.TextArea placeholder="Text Area" autoSize />`,
      element: <div style={{ width: 360 }}><Input.TextArea placeholder="Text Area" autoSize /></div>,
    },
  ];

  // Keep the full demo for when you re-enable the global Code tab later
  const fullCode = `import { Input, Space } from 'antd';

export default function Demo(){
  return (
    <Space direction="vertical" style={{ width: 360 }}>
      <Input placeholder="Default Input" />
      <Input.Password placeholder="Password" />
      <Input.TextArea placeholder="Text Area" autoSize />
    </Space>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title
        level={3}
        className="main-title-inner"
      >
        Input
      </Typography.Title>

      <ComponentCard
        title="Inputs"
        description="Form inputs for text, passwords and long text."
        examples={examples}
        code={fullCode}                 // retained for later use
        showGlobalCode={false}          // hide the global 'Code' tab (keep per-example Code tabs)
        mockupSrc="/mockups/input.png"  // place at public/mockups/input.png
        mockupAlt="Input mockup"
        mockupCaption="Mockup reference for default input, password, and text area variations."
      />
    </AppLayout>
  );
}


