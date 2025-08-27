// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Modal, Button, Space, Typography } from 'antd';
// import { useState } from 'react';

// export default function ModalPage() {
//   const [open, setOpen] = useState(false);
//   const code = `import { Modal, Button, Space } from 'antd';
// import { useState } from 'react';

// export default function Demo(){
//   const [open, setOpen] = useState(false);
//   return (
//     <Space>
//       <Button type="primary" onClick={()=>setOpen(true)}>Open Modal</Button>
//       <Modal title="Basic Modal" open={open} onOk={()=>setOpen(false)} onCancel={()=>setOpen(false)}>
//         Some contents...
//       </Modal>
//     </Space>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Modal</Typography.Title>
//       <ComponentCard 
//       title="Modal" 
//       description="Display content requiring user interaction." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Modal mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy.">
//         <Space>
//           <Button type="primary" onClick={()=>setOpen(true)}>Open Modal</Button>
//           <Modal title="Basic Modal" open={open} onOk={()=>setOpen(false)} onCancel={()=>setOpen(false)}>
//             Some contents...
//           </Modal>
//         </Space>
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Modal, Button, Space, Typography } from 'antd';
import { useState } from 'react';

export default function ModalPage() {
  const [openBasic, setOpenBasic] = useState(false);

  const showConfirm = () => {
    Modal.confirm({
      title: 'Delete item?',
      content: 'This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
    });
  };

  const examples = [
    {
      title: 'Basic Controlled Modal',
      code: `import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        Some contents...
      </Modal>
    </>
  );
}`,
      element: (
        <Space>
          <Button type="primary" onClick={() => setOpenBasic(true)}>Open Modal</Button>
          <Modal
            title="Basic Modal"
            open={openBasic}
            onOk={() => setOpenBasic(false)}
            onCancel={() => setOpenBasic(false)}
          >
            Some contents...
          </Modal>
        </Space>
      ),
    },
    {
      title: 'Confirmation Dialog',
      code: `import { Modal, Button } from 'antd';

export default function Demo(){
  const showConfirm = () => {
    Modal.confirm({
      title: 'Delete item?',
      content: 'This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
    });
  };

  return <Button onClick={showConfirm}>Show Confirm</Button>;
}`,
      element: <Button onClick={showConfirm}>Show Confirm</Button>,
    },
  ];

  // Keep a full demo for when you re-enable the global Code tab
  const fullCode = `import { Modal, Button, Space } from 'antd';
import { useState } from 'react';

export default function Demo(){
  const [open, setOpen] = useState(false);
  const showConfirm = () => {
    Modal.confirm({
      title: 'Delete item?',
      content: 'This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
    });
  };

  return (
    <Space>
      <Button type="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal title="Basic Modal" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        Some contents...
      </Modal>

      <Button onClick={showConfirm}>Show Confirm</Button>
    </Space>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title level={3} className="main-title-inner">
        Modal
      </Typography.Title>

      <ComponentCard
        title="Modal"
        description="Display content that requires user action or acknowledgment."
        examples={examples}
        code={fullCode}                 // retained for later if you re-enable the global tab
        showGlobalCode={false}          // hide global Code tab (per-example code stays visible)
        mockupSrc="/mockups/modal.png"  // add image at public/mockups/modal.png
        mockupAlt="Modal mockup"
        mockupCaption="Reference for basic and confirmation modal patterns."
      />
    </AppLayout>
  );
}
