import Header from "../components/Header";
function MainLayout({  children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
