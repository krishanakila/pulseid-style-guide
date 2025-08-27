// import AppLayout from '@/components/Layout.jsx';
// import ComponentCard from '@/components/ComponentCard.jsx';
// import { Row, Col, Typography } from 'antd';

// const Box = ({ children }) => (
//   <div style={{ background:'#0f172a', border:'1px solid rgba(148,163,184,.25)', borderRadius:8, padding:12, textAlign:'center' }}>{children}</div>
// );

// export default function GridPage() {
//   const code = `import { Row, Col } from 'antd';

// export default function Demo(){
//   return (
//     <>
//       <Row gutter={[16,16]}>
//         <Col span={12}><div>span=12</div></Col>
//         <Col span={12}><div>span=12</div></Col>
//       </Row>
//       <Row gutter={[16,16]}>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>1</div></Col>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>2</div></Col>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>3</div></Col>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>4</div></Col>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>5</div></Col>
//         <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>6</div></Col>
//       </Row>
//     </>
//   );
// }`;

//   return (
//     <AppLayout>
//       <Typography.Title level={3} style={{ margin: '0 0 20px 0', color: "#fff" }}>Grid System</Typography.Title>
//       <ComponentCard 
//       title="Grid System" 
//       description="Responsive layout with Ant Design's 24-grid." 
//       code={code}
//       mockupSrc="/"               // add image to public/mockups/card.png
//       mockupAlt="Grid mockup"
//       mockupCaption="High-fidelity reference for card structure, spacing, and hierarchy."
//       >
//         <Typography.Title level={5}>Basic</Typography.Title>
//         <Row gutter={[16,16]}>
//           <Col span={12}><Box>span=12</Box></Col>
//           <Col span={12}><Box>span=12</Box></Col>
//         </Row>

//         <Typography.Title level={5} style={{marginTop:24}}>Responsive</Typography.Title>
//         <Row gutter={[16,16]}>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>1</Box></Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>2</Box></Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>3</Box></Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>4</Box></Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>5</Box></Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>6</Box></Col>
//         </Row>
//       </ComponentCard>
//     </AppLayout>
//   );
// }



import AppLayout from '@/components/Layout.jsx';
import ComponentCard from '@/components/ComponentCard.jsx';
import { Row, Col, Typography } from 'antd';

const Box = ({ children }) => (
  <div
    style={{
      background: '#0f172a',
      border: '1px solid rgba(148,163,184,.25)',
      borderRadius: 8,
      padding: 12,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export default function GridPage() {
  const examples = [
    // 1) Basic two-column
    {
      title: '1) Basic 2-Column (12/12)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={12}><div>span=12</div></Col>
      <Col span={12}><div>span=12</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={12}><Box>span=12</Box></Col>
          <Col span={12}><Box>span=12</Box></Col>
        </Row>
      ),
    },

    // 2) Three equal columns
    {
      title: '2) Three Columns (8/8/8)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
        </Row>
      ),
    },

    // 3) Four columns
    {
      title: '3) Four Columns (6/6/6/6)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
        </Row>
      ),
    },

    // 4) Mixed spans
    {
      title: '4) Mixed Spans (8/8/4/4)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
      <Col span={4}><div>4</div></Col>
      <Col span={4}><div>4</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
          <Col span={4}><Box>4</Box></Col>
          <Col span={4}><Box>4</Box></Col>
        </Row>
      ),
    },

    // 5) Offset
    {
      title: '5) Offset (8 offset 8)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={8} offset={8}><div>8 (offset 8)</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={8} offset={8}><Box>8 (offset 8)</Box></Col>
        </Row>
      ),
    },

    // 6) Order (push/pull alternative)
    {
      title: '6) Order (flex order)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={12} style={{ order: 2 }}><div>Second (order 2)</div></Col>
      <Col span={12} style={{ order: 1 }}><div>First (order 1)</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={12} style={{ order: 2 }}><Box>Second (order 2)</Box></Col>
          <Col span={12} style={{ order: 1 }}><Box>First (order 1)</Box></Col>
        </Row>
      ),
    },

    // 7) Flex Align & Justify
    {
      title: '7) Align & Justify (space-between, middle)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]} justify="space-between" align="middle" style={{ minHeight: 100 }}>
      <Col span={6}><div>Left</div></Col>
      <Col span={6}><div>Center</div></Col>
      <Col span={6}><div>Right</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]} justify="space-between" align="middle" style={{ minHeight: 100 }}>
          <Col span={6}><Box>Left</Box></Col>
          <Col span={6}><Box>Center</Box></Col>
          <Col span={6}><Box>Right</Box></Col>
        </Row>
      ),
    },

    // 8) Responsive breakpoints (xs→xl)
    {
      title: '8) Responsive (xs→xl)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>1</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>2</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>3</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>4</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>5</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><div>6</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>1</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>2</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>3</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>4</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>5</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>6</Box></Col>
        </Row>
      ),
    },

    // 9) Responsive visibility
    {
      title: '9) Responsive Visibility (hide on xs)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col xs={24} md={12}><div>Always visible (24→12)</div></Col>
      <Col xs={0}  md={12}><div>Hidden on xs (0), visible on md+</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}><Box>Always visible (24→12)</Box></Col>
          <Col xs={0} md={12}><Box>Hidden on xs (0), visible on md+</Box></Col>
        </Row>
      ),
    },

    // 10) Nested grids
    {
      title: '10) Nested Grid',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col span={12}>
        <div>Parent 12
          <Row gutter={[8,8]} style={{ marginTop: 8 }}>
            <Col span={12}><div>Child 12</div></Col>
            <Col span={12}><div>Child 12</div></Col>
          </Row>
        </div>
      </Col>
      <Col span={12}>
        <div>Parent 12
          <Row gutter={[8,8]} style={{ marginTop: 8 }}>
            <Col span={8}><div>Child 8</div></Col>
            <Col span={8}><div>Child 8</div></Col>
            <Col span={8}><div>Child 8</div></Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Box>
              Parent 12
              <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
                <Col span={12}><Box>Child 12</Box></Col>
                <Col span={12}><Box>Child 12</Box></Col>
              </Row>
            </Box>
          </Col>
          <Col span={12}>
            <Box>
              Parent 12
              <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
                <Col span={8}><Box>Child 8</Box></Col>
                <Col span={8}><Box>Child 8</Box></Col>
                <Col span={8}><Box>Child 8</Box></Col>
              </Row>
            </Box>
          </Col>
        </Row>
      ),
    },

    // 11) Horizontal-only gutter
    {
      title: '11) Horizontal-only Gutter',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[24, 0]}>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[24, 0]}>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
        </Row>
      ),
    },

    // 12) Vertical-only gutter
    {
      title: '12) Vertical-only Gutter',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[0, 24]}>
      <Col span={12}><div>12</div></Col>
      <Col span={12}><div>12</div></Col>
      <Col span={12}><div>12</div></Col>
      <Col span={12}><div>12</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[0, 24]}>
          <Col span={12}><Box>12</Box></Col>
          <Col span={12}><Box>12</Box></Col>
          <Col span={12}><Box>12</Box></Col>
          <Col span={12}><Box>12</Box></Col>
        </Row>
      ),
    },

    // 13) Responsive gutter object
    {
      title: '13) Responsive Gutter (xs→lg)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 24 }}>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
      <Col span={6}><div>6</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 24 }}>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
          <Col span={6}><Box>6</Box></Col>
        </Row>
      ),
    },

    // 14) Fixed + Auto columns (flex)
    {
      title: '14) Fixed + Auto (flex)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col flex="200px"><div>Fixed 200px</div></Col>
      <Col flex="auto"><div>Auto (fills)</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col flex="200px"><Box>Fixed 200px</Box></Col>
          <Col flex="auto"><Box>Auto (fills)</Box></Col>
        </Row>
      ),
    },

    // 15) Equal-width autos
    {
      title: '15) Equal-width Auto (flex=1)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col flex="1"><div>1</div></Col>
      <Col flex="1"><div>1</div></Col>
      <Col flex="1"><div>1</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col flex="1"><Box>1</Box></Col>
          <Col flex="1"><Box>1</Box></Col>
          <Col flex="1"><Box>1</Box></Col>
        </Row>
      ),
    },

    // 16) No wrap (overflow horizontally)
    {
      title: '16) No Wrap (wrap=false)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row wrap={false} gutter={[16,16]}>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8</div></Col>
      <Col span={8}><div>8 (overflows)</div></Col>
    </Row>
  );
}`,
      element: (
        <Row wrap={false} gutter={[16, 16]}>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8</Box></Col>
          <Col span={8}><Box>8 (overflows)</Box></Col>
        </Row>
      ),
    },

    // 17) Responsive offsets
    {
      title: '17) Responsive Offset (md only)',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col xs={24} md={{ span: 8, offset: 8 }}><div>Centered on md+</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col xs={24} md={{ span: 8, offset: 8 }}><Box>Centered on md+</Box></Col>
        </Row>
      ),
    },

    // 18) XXL breakpoint layout
    {
      title: '18) XXL Breakpoint Layout',
      code: `import { Row, Col } from 'antd';

export default function Demo(){
  return (
    <Row gutter={[16,16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>1</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>2</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>3</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>4</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>5</div></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><div>6</div></Col>
    </Row>
  );
}`,
      element: (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>1</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>2</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>3</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>4</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>5</Box></Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}><Box>6</Box></Col>
        </Row>
      ),
    },
  ];

  return (
    <AppLayout>
      <Typography.Title level={3} className="main-title-inner">
        Grid
      </Typography.Title>

      <ComponentCard
        title="Grid System"
        description="A flexible 24-column, responsive grid with offsets, ordering, nesting, gutters, and flex columns."
        examples={examples}
        code={`// Combine any scenarios as needed`}
        showGlobalCode={false}
        mockupSrc="/mockups/grid.png"
        mockupAlt="Grid mockup"
        mockupCaption="Reference for columns, gutters, offsets, ordering, visibility, nesting, and flex."
      />
    </AppLayout>
  );
}

