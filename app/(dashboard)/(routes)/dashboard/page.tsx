import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>
        DashBoardPage (Protected)
      </p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default DashboardPage;