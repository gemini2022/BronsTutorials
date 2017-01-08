function DHCP() {

    //DHCP
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 40, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DHCP", root);
        tutorialList.child[0].child[2].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[2].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[2].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing DHCP
            new HierarchicalUnit(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing DHCP", root);
            
                    //Adding DHCP Server Role
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding DHCP Server Role", "DHCP/InstallingDHCP/AddingDhcpServerRole");

            //DHCP Server
            new HierarchicalUnit(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DHCP Server", root);
            
                    //Manage Authorized Servers
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Manage Authorized Servers", "DHCP/DhcpServer/ManageAuthorizedServers");

                    //Add/Remove Bindings
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Add/Remove Bindings", "DHCP/DhcpServer/AddRemoveBindings");

                    //Authorize/Unauthorize
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Authorize/Unauthorize", "DHCP/DhcpServer/AuthorizeUnauthorize");

                    //Backup
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Backup", "DHCP/DhcpServer/Backup");

                    //Restore
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Restore", "DHCP/DhcpServer/Restore");

                    //Start/Stop/Pause Server
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[2].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Start/Stop/Pause Server", "DHCP/DhcpServer/StartStopPauseServer");

                    //DHCP Server Properties
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[2].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DHCP Server Properties", root, "DHCP/DhcpServer/DhcpServerProperties");

                            //Advanced Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[2].child[7].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DHCP/DhcpServer/AdvancedTab");

            //IPv4
            new HierarchicalUnit(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv4", root);
            
                    //Statistics
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Statistics", "DHCP/IPv4/Statistics");

                    //Server Options
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Server Options", "DHCP/IPv4/ServerOptions");

                    //Filters
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Filters", "DHCP/IPv4/Filters");

                    //Scope
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope", root, "DHCP/IPv4/Scope");

                            //Address Pool
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Address Pool", "DHCP/IPv4/AddressPool");

                            //Address Pool
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Address Leases", "DHCP/IPv4/AddressLeases");

                            //Reservations
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Reservations", "DHCP/IPv4/Reservations");

                            //Scope Options
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope Options", "DHCP/IPv4/ScopeOptions");














}