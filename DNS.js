function DNS() {

    //DNS
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 20, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS", root);
        tutorialList.child[0].child[1].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[1].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[1].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing DNS
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing DNS", root);
            
                    //Adding DNS Server Role
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding DNS Server Role", "DNS/InstallingDNS/AddingDnsServerRole");

            //DNS Server Properties
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Server Properties", root);
            
                    //DNS Server Property Tabs
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Server Property Tabs", root, "DNS/DnsServerProperties/DnsServerPropertyTabs");

                            //Interfaces Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Interfaces Tab", "DNS/DnsServerProperties/InterfacesTab");

                            //Forwarders Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Forwarders Tab", "DNS/DnsServerProperties/ForwardersTab");

                            //Advanced Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DNS/DnsServerProperties/AdvancedTab");

                            //Root Hints Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Root Hints Tab", "DNS/DnsServerProperties/RootHintsTab");

                            //Debug Logging Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Debug Logging Tab", "DNS/DnsServerProperties/DebugLoggingTab");

                            //Event Logging Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Event Logging Tab", "DNS/DnsServerProperties/EventLoggingTab");

                            //Trust Anchors Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Trust Anchors Tab", "DNS/DnsServerProperties/TrustAnchorsTab");

                            //Monitoring Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[1].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Monitoring Tab", "DNS/DnsServerProperties/MonitoringTab");

            //Zone
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Zones", root);
            
                    //Primary Zone
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Primary Zone", "DNS/Zones/PrimaryZone");

                    //Secondary Zone
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Secondary Zone", "DNS/Zones/SecondaryZone");

                    //Stub Zone
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Stub Zone", "DNS/Zones/StubZone");

                    //Reverse Lookup Zone
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Reverse Lookup Zone", "DNS/Zones/ReverseLookupZone");

                    //Conditional Forwarders
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Conditional Forwarders", "DNS/Zones/ConditionalForwarders");

                    //Active Directory-Integrated Zone
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Active Directory-Integrated Zone", "DNS/Zones/ActiveDirectoryIntegratedZone");








}