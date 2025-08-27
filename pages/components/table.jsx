// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Table, Typography } from 'antd';

// const columns = [
//   { title: 'Name', dataIndex: 'name', key: 'name' },
//   { title: 'Age', dataIndex: 'age', key: 'age' },
//   { title: 'Address', dataIndex: 'address', key: 'address' },
// ];

// const data = [
//   { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
//   { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
//   { key: '3', name: 'Joe Black', age: 29, address: 'Sydney No. 1 Lake Park' },
// ];

// export default function TablePage() {
//   const code = `import { Table } from 'antd';

// const columns = [
//   {{ title: 'Name', dataIndex: 'name', key: 'name' }},
//   {{ title: 'Age', dataIndex: 'age', key: 'age' }},
//   {{ title: 'Address', dataIndex: 'address', key: 'address' }},
// ];

// const data = [
//   {{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }},
//   {{ key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }},
//   {{ key: '3', name: 'Joe Black', age: 29, address: 'Sydney No. 1 Lake Park' }},
// ];

// export default function Demo(){{
//   return <Table columns={columns} dataSource={data} pagination={false} />;
// }}`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Table</Typography.Title>
//       <ComponentCard 
//       title="Table" 
//       description="Tables display structured data." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Table mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy.">
//         <Table columns={columns} dataSource={data} pagination={false} />
//       </ComponentCard>
//     </AppLayout>
//   );
// }


import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Table, Typography } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 29, address: 'Sydney No. 1 Lake Park' },
];

export default function TablePage() {
  const examples = [
    {
      title: 'Basic Table',
      code: `import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 29, address: 'Sydney No. 1 Lake Park' },
];

export default function Demo(){
  return <Table columns={columns} dataSource={data} pagination={false} />;
}`,
      element: <Table columns={columns} dataSource={data} pagination={false} />,
    },
    {
      title: 'Table with Pagination',
      code: `import { Table } from 'antd';

export default function Demo(){
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />;
}`,
      element: <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />,
    },
  ];

  // Keep a full demo string for when you re-enable the global Code tab later
  const fullCode = `import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 29, address: 'Sydney No. 1 Lake Park' },
];

export default function Demo(){
  return <Table columns={columns} dataSource={data} pagination={false} />;
}`;

  return (
    <AppLayout>
      <Typography.Title level={3} className="main-title-inner">
        Table
      </Typography.Title>

      <ComponentCard
        title="Table"
        description="Tables display structured data in rows and columns."
        examples={examples}
        code={fullCode}                   // retained for later
        showGlobalCode={false}            // hide global Code tab (per-example stays visible)
        mockupSrc="/mockups/table.png"    // add image at public/mockups/table.png
        mockupAlt="Table mockup"
        mockupCaption="Reference for data tables with rows, columns, and pagination."
      />
    </AppLayout>
  );
}
