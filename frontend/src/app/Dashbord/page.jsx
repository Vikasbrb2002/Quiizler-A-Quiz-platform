import SidebarLayout from "@/components/layout/SidebarLayout";

export default function Dashboard() {
  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome to the Dashboard</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">This is the main content area.</p>
      </div>
    </SidebarLayout>
  );
}
