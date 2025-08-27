// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Card, Typography } from 'antd';

// export default function CardPage() {
//   const code = `import { Card, Typography } from 'antd';

// export default function Demo(){
//   return (
//     <Card title="Card Title" style={{ width: 360 }}>
//       <Typography.Paragraph type="secondary">
//         Cards group related content and actions.
//       </Typography.Paragraph>
//     </Card>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title
//         level={3}
//         style={{ margin: '0 0 20px 0', color: "#fff" }}
//       >
//         Card
//       </Typography.Title>

//       <ComponentCard
//         title="Card"
//         description="Cards group related content and actions."
//         code={''}
//         mockupSrc="/"               
//         mockupAlt="Card mockup"
//         mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy."
//       >
//         <Card title="Card Title" style={{ width: 360 }}>
//           <Typography.Paragraph type="secondary">
//             Cards group related content and actions.
//           </Typography.Paragraph>
//         </Card>
//       </ComponentCard>
//     </AppLayout>
//   );
// }



import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Card, Typography, Button } from 'antd';

export default function CardPage() {
  const examples = [
    {
      title: 'Basic Card',
      code: `import { Card, Typography } from 'antd';

export default function Demo(){
  return (
    <Card title="Card Title" style={{ width: 360 }}>
      <Typography.Paragraph type="secondary">
        Cards group related content and actions.
      </Typography.Paragraph>
    </Card>
  );
}`,
      element: (
        <Card title="Card Title" style={{ width: 360 }}>
          <Typography.Paragraph type="secondary">
            Cards group related content and actions.
          </Typography.Paragraph>
        </Card>
      ),
    },
    {
      title: 'Card with Actions',
      code: `import { Card, Button, Typography } from 'antd';

export default function Demo(){
  return (
    <Card
      title="Billing"
      extra={<Button type="link">Manage</Button>}
      actions={[<Button type="text" key="edit">Edit</Button>, <Button type="text" key="delete">Delete</Button>]}
      style={{ width: 360 }}
    >
      <Typography.Paragraph type="secondary">
        Use actions for quick, contextual operations.
      </Typography.Paragraph>
    </Card>
  );
}`,
      element: (
        <Card
          title="Billing"
          extra={<Button type="link">Manage</Button>}
          actions={[
            <Button type="text" key="edit">Edit</Button>,
            <Button type="text" key="delete">Delete</Button>,
          ]}
          style={{ width: 360 }}
        >
          <Typography.Paragraph type="secondary">
            Use actions for quick, contextual operations.
          </Typography.Paragraph>
        </Card>
      ),
    },
  ];

  // Keep a full demo string if you plan to re-enable the global Code tab later
  const fullCode = `import { Card, Typography } from 'antd';

export default function Demo(){
  return (
    <Card title="Card Title" style={{ width: 360 }}>
      <Typography.Paragraph type="secondary">
        Cards group related content and actions.
      </Typography.Paragraph>
    </Card>
  );
}`;

  return (
    <AppLayout>
      <Typography.Title
        level={3}
        className="main-title-inner"
      >
        Card
      </Typography.Title>

      <ComponentCard
        title="Card"
        description="Cards group related content and actions."
        examples={examples}
        code={fullCode}                 // retained for later
        showGlobalCode={false}          // hide the global Code tab; per-example Code stays
        mockupSrc="/mockups/card.png"   // put image at public/mockups/card.png
        mockupAlt="Card mockup"
        mockupCaption="Reference for card titles, actions, and content layout."
      />
    </AppLayout>
  );
}
