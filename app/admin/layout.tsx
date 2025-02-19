import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Gizmo Galaxy Admin",
  description: "Gizmo Galaxy Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
