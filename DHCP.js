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
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Address Pool", "DHCP/IPv4/Scope/AddressPool");

                            //Address Leases
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Address Leases", "DHCP/IPv4/Scope/AddressLeases");

                            //Reservations
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Reservations", "DHCP/IPv4/Scope/Reservations");

                            //Scope Options
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope Options", "DHCP/IPv4/Scope/ScopeOptions");

                            //Split Scope
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Split Scope", "DHCP/IPv4/Scope/SplitScope");

                            //Scope Properties
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new ExpandCollapseLink(tutorialList.child[0].child[2].child[3].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope Properties", root, "DHCP/IPv4/Scope/ScopeProperties");

                                    //General Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[3].child[4].child[6].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "DHCP/IPv4/Scope/ScopeProperties/GeneralTab");

                                    //DNS Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[3].child[4].child[6].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Tab", "DHCP/IPv4/Scope/ScopeProperties/DnsTab");

                                    //Network Access Protection Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[3].child[4].child[6].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Network Access Protection Tab", "DHCP/IPv4/Scope/ScopeProperties/NetworkAccessProtectionTab");

                                    //Advanced Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[3].child[4].child[6].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DHCP/IPv4/Scope/ScopeProperties/AdvancedTab");

                    //Superscope
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Superscope", "DHCP/IPv4/Superscope");

                    //Multicast Scope
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Multicast Scope", "DHCP/IPv4/MulticastScope");

                    //User Classes
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "User Classes", "DHCP/IPv4/UserClasses");

                    //Vendor Classes
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Vendor Classes", "DHCP/IPv4/VendorClasses");

                    //Reconcile All Scopes
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Reconcile All Scopes", "DHCP/IPv4/ReconcileAllScopes");

                    //IPv4 Properties
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv4 Properties", root, "DHCP/IPv4/IPv4Properties");

                            //General Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[10].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "DHCP/IPv4/IPv4Properties/GeneralTab");

                            //DNS Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[10].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Tab", "DHCP/IPv4/IPv4Properties/DnsTab");

                            //Network Access Protection Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[10].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Network Access Protection Tab", "DHCP/IPv4/IPv4Properties/NetworkAccessProtectionTab");

                            //Filters Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[10].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Filters Tab", "DHCP/IPv4/IPv4Properties/FiltersTab");

                            //Advanced Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[3].child[10].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DHCP/IPv4/IPv4Properties/AdvancedTab");

            //IPv6
            new HierarchicalUnit(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv6", root);
            
                    //Statistics
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Statistics", "DHCP/IPv6/Statistics");

                    //Server Options
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Server Options", "DHCP/IPv6/ServerOptions");

                    //Scope
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope", root, "DHCP/IPv6/Scope");

                            //Address Leases
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Address Leases", "DHCP/IPv6/Scope/AddressLeases");

                            //Exclusions
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Exclusions", "DHCP/IPv6/Scope/Exclusions");

                            //Reservations
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Reservations", "DHCP/IPv6/Scope/Reservations");

                            //Scope Options
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope Options", "DHCP/IPv6/Scope/ScopeOptions");

                            //Scope Properties
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new ExpandCollapseLink(tutorialList.child[0].child[2].child[4].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scope Properties", root, "DHCP/IPv6/Scope/ScopeProperties");

                                    //General Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[4].child[3].child[5].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "DHCP/IPv6/Scope/ScopeProperties/GeneralTab");

                                    //DNS Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[4].child[3].child[5].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Tab", "DHCP/IPv6/Scope/ScopeProperties/DnsTab");

                                    //Lease Tab
                                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                        new Link(tutorialList.child[0].child[2].child[4].child[3].child[5].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Lease Tab", "DHCP/IPv6/Scope/ScopeProperties/LeaseTab");

                    //User Classes
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "User Classes", "DHCP/IPv6/UserClasses");

                    //IPv6 Properties
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[2].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv6 Properties", root, "DHCP/IPv6/IPv6Properties");

                            //General Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[5].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "DHCP/IPv6/IPv6Properties/GeneralTab");

                            //DNS Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[5].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Tab", "DHCP/IPv6/IPv6Properties/DnsTab");

                            //Advanced Tab
                            new HierarchicalUnit(tutorialList.child[0].child[2].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[2].child[4].child[5].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DHCP/IPv6/IPv6Properties/AdvancedTab");






































}