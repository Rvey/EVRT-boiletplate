pages are one to one map of the router routes. This is similar to the concept that NextJS or GatsbyJs takes.
This is the bigger react component which presents a whole page. It might contains additional routing, so more nested pages. An example of this page will be dashboard page which might look like (in it's simples form)
<>
 <PageHeader />
 <PageTopMenu />
 <PageLeftNavigation />
 <VisitorBlockChart />
 <VistorLineChart />
 <SomeOtherAwesomeComponent />
 <PageFooter>
</>