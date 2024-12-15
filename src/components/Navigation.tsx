import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-weaveq-purple to-weaveq-blue bg-clip-text text-transparent">
            WaveQ
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">Cloud Management</h4>
                      <p className="text-sm text-muted-foreground">Unified cloud infrastructure management</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">AI Integration</h4>
                      <p className="text-sm text-muted-foreground">Seamless AI application deployment</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">Enterprise</h4>
                      <p className="text-sm text-muted-foreground">Large-scale cloud orchestration</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">Startups</h4>
                      <p className="text-sm text-muted-foreground">Scalable cloud solutions</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Pricing
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="ghost">Sign In</Button>
          <Link to="/preview">
            <Button className="bg-weaveq-purple hover:bg-weaveq-purple/90">Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};