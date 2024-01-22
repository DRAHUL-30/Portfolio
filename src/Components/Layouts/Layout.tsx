import { TopMenu } from './TopMenu';
import { RenderComponent } from './RenderComponent';
import { renderJson } from './RenderJson';
// import { PageProvider } from './PageContext';
// import { usePageContext } from './PageContext';

export const Layout = () => {
    // const { currentPage } = usePageContext();
    const ComponentToRender = renderJson["Profile" as keyof typeof renderJson];

  return (
    // <PageProvider>
      <div className='w-full p-4 space-y-4 h-screen bg-slate-100'>
        <TopMenu />
        {/* <RenderComponent children={ComponentToRender} /> */}
      </div>
    // </PageProvider>
  );
}
