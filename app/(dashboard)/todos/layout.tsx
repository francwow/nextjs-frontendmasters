import HomeBtn from '@/components/HomeBtn';
import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is part of Todos Layout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
