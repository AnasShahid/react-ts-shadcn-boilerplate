import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout';

const { Content } = Layout;

export default function RootLayout() {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
