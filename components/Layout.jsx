// components/Layout.jsx
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu, Button, Input, Tag } from 'antd'; // 👈 added Tag
import Image from 'next/image';
import {
  FundProjectionScreenOutlined,
  AppstoreOutlined,
  EditOutlined,
  BorderOuterOutlined,
  BarsOutlined,
  CheckSquareOutlined,
  TableOutlined,
  CheckCircleOutlined,
  SwitcherOutlined,
  CreditCardOutlined,
  ColumnWidthOutlined,
} from '@ant-design/icons';
import { useAuth } from '@/contexts/AuthContext.jsx';

const { Header, Sider, Content } = Layout;

// 👇 Add a `status` field where you want a tag shown.
//   Allowed values: 'new' | 'in-progress' | 'hold' (anything else = no tag)
const RAW_LINKS = [
  { key: '/', title: 'Home', icon: <FundProjectionScreenOutlined />, keywords: 'dashboard landing main', },
  { key: '/components/grid', title: 'Grid', icon: <ColumnWidthOutlined />, keywords: 'layout columns rows', status: 'ready' },
  { key: '/components/button', title: 'Buttons', icon: <AppstoreOutlined />, keywords: 'btn actions cta',  status: 'ready'},
  { key: '/components/input', title: 'Inputs', icon: <EditOutlined />, keywords: 'text field form', status: 'in-dev'},
  { key: '/components/dropdown', title: 'Dropdown', icon: <BarsOutlined />, keywords: 'select menu', status: 'planned'},
  { key: '/components/card', title: 'Card', icon: <CreditCardOutlined />, keywords: 'panel surface container'},
  { key: '/components/radio', title: 'Radio', icon: <CheckSquareOutlined />, keywords: 'single choice options'},
  { key: '/components/checkbox', title: 'Checkbox', icon: <CheckCircleOutlined />, keywords: 'multi select options'},
  { key: '/components/switch', title: 'Switch', icon: <SwitcherOutlined />, keywords: 'toggle on off'},
  { key: '/components/modal', title: 'Modal', icon: <BorderOuterOutlined />, keywords: 'dialog overlay'},
  { key: '/components/table', title: 'Table', icon: <TableOutlined />, keywords: 'data grid list'},
];

export default function AppLayout({ children }) {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [collapsed, setCollapsed] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    if (!user) router.replace('/login');
  }, [user, router]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return RAW_LINKS;
    return RAW_LINKS.filter((item) =>
      (item.title + ' ' + (item.keywords || '')).toLowerCase().includes(needle)
    );
  }, [q]);

  // 👇 helper to render a Tag (placed IN FRONT of the title)
const renderStatusTag = (status) => {
  if (!status) return null;
  const map = {
    'ready': { color: '#13295b', text: 'READY', className: 'blink-tag' },
    'in-dev': { color: 'green', text: 'IN-DEV', className: '' },
    'planned': { color: '#3695c1', text: 'PLANNED', className: '' },
  };
  const cfg = map[status];
  if (!cfg) return null;

  return (
    <Tag
      color={cfg.color}
      className={cfg.className}
      style={{ marginLeft: 8, minWidth: 70, textAlign: 'center' }} // 👈 ensures alignment
    >
      {cfg.text}
    </Tag>
  );
};


const menuItems = useMemo(
  () =>
    filtered.map((item) => ({
      key: item.key,
      icon: item.icon,
      label: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // 👈 pushes tag to right edge
            width: '100%',
          }}
        >
          <Link href={item.key}>{item.title}</Link>
          {renderStatusTag(item.status)}
        </div>
      ),
    })),
  [filtered]
);


  const onSearchEnter = () => {
    if (filtered.length > 0) router.push(filtered[0].key);
  };

  if (!user) {
    return (
      <div
        style={{
          color: '#94a3b8',
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Redirecting to login…
      </div>
    );
  }

  return (
    <Layout className="app-layout">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={280}
        className="app-sider"
      >
        <div className="sider-inner">
          <div style={{ textAlign: 'center', padding: '12px 16px' }}>
            <Link href="https://www.pulseid.com/catalyst/" target="_blank">
              <Image
                src="/logo-w.svg"
                alt="App Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain', cursor: 'pointer' }}
                priority
              />
            </Link>
          </div>

          {!collapsed && (
            <div style={{ padding: '12px 12px' }}>
              <Input
                size="large"
                allowClear
                placeholder="Search components..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onPressEnter={onSearchEnter}
              />
            </div>
          )}

          <Menu
            className="navbar-left"
            theme="dark"
            mode="inline"
            selectedKeys={[router.pathname]}
            items={menuItems}
          />
        </div>
      </Sider>

      <Layout>
        <Header
          className="app-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
          }}
        >
          <div className="page-title">UI Design System Guidelines</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="https://ant.design/components/overview/" target="_blank">
              <Button type="primary">Ant Design</Button>
            </Link>
            <Link
              href="https://www.figma.com/design/4uo6utklpLCkTBFkWc8g7d/LMS-2.0---Style-Guide?node-id=56-3100&t=klkWXsgfUh67u5QF-0"
              target="_blank"
            >
              <Button type="dashed"> Figma - Design System </Button>
            </Link>
            <Button danger onClick={logout}>
              Logout
            </Button>
          </div>
        </Header>

        <Content className="app-main" style={{ margin: '16px' }}>
          <div className="container">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
