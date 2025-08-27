import AppLayout from '@/components/Layout.jsx';
import { Alert, Typography, Tag } from 'antd';

export default function Home() {
  return (
    <AppLayout>
      <Typography.Title level={3} style={{marginTop: 0, color: "#fff"}}>Welcome <span className="page-title"><span style={{ color: '#FF9800' }}>Pulse id </span>Design System</span></Typography.Title>

      
      <Alert
        message={<h3>Getting Started</h3>}
        description={
          <div>
            <p>The <span style={{marginTop: 0, color: "#FF9800"}}>Pulse id </span> Design System is your central hub for creating cohesive, accessible, and scalable digital experiences. It provides a unified foundation that bridges design and development, ensuring consistency across every project.</p>
              <h3>Use the left sidebar to navigate components. Each page has live preview and copyable code.</h3>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                <li>Use the left sidebar to explore components, patterns, and guidelines.</li>
                <li>Each page includes a live preview so you can see components in action.</li>
                <li>Quickly copy production-ready code snippets to speed up your workflow.</li>
                <li>Ensure design and development stay aligned with a single source of truth.</li>
              </ul>
              <br/>
              <h3>In the left menu, each component is tagged with a status indicator. Please refer to these statuses before using a component:</h3>
               <ul style={{ margin: 0, paddingLeft: "20px" }}>
                <li style={{paddingBottom: "8px" }}><Tag color="#3695c1">PLANNED</Tag> – Not ready to use yet; still in backlog or draft stage.</li>
                <li style={{paddingBottom: "8px" }}><Tag color="#13295b">READY</Tag> – Finalized and available for developers to implement.</li>
                <li style={{paddingBottom: "0px" }}><Tag color="green">IN-DEV</Tag> – Currently under development (e.g., UI build in progress).</li>
              </ul>
              <br/>
              <p>Use components according to their status to ensure stability and consistency in your projects.</p>

             <br/><br/>
              <div>
                  <Typography.Text type="secondary" style={{ display: "block", textAlign: "center", marginTop: "20px" }}>
                    Developed by <span style={{ color: "#FFA653", fontWeight: 500 }}>Pulse id UI Team</span>
                  </Typography.Text>
              </div>
          </div>
        }
        type="info"
        showIcon
      />
    </AppLayout>
  );
}
