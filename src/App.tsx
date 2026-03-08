import { ConfigProvider } from 'antd';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import ProductList from './pages/product/List';
import ProductAdd from './pages/product/Add';
import OrderList from './pages/order/List';
import UserList from './pages/user';
import Settings from './pages/settings';
import zhCN from 'antd/locale/zh_CN';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: null },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'product/list', element: <ProductList /> },
      { path: 'product/add', element: <ProductAdd /> },
      { path: 'product/category', element: <div>商品分类页面（待开发）</div> },
      { path: 'order/list', element: <OrderList /> },
      { path: 'order/refund', element: <div>退款管理页面（待开发）</div> },
      { path: 'user', element: <UserList /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
