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

            //DNS Server
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Server", root);
            
                    //Set Aging / Scavenging For All Zones
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Set Aging / Scavenging For All Zones", "DNS/DnsServer/SetAgingScavengingForAllZones");

                    //Scavenge Stale Resource Records
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Scavenge Stale Resource Records", "DNS/DnsServer/ScavengeStaleResourceRecords");

                    //DNS Server Properties
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Server Properties", root, "DNS/DnsServer/DnsServerProperties");

                            //Interfaces Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Interfaces Tab", "DNS/DnsServer/InterfacesTab");

                            //Forwarders Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Forwarders Tab", "DNS/DnsServer/ForwardersTab");

                            //Advanced Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Advanced Tab", "DNS/DnsServer/AdvancedTab");

                            //Root Hints Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Root Hints Tab", "DNS/DnsServer/RootHintsTab");

                            //Debug Logging Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Debug Logging Tab", "DNS/DnsServer/DebugLoggingTab");

                            //Event Logging Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Event Logging Tab", "DNS/DnsServer/EventLoggingTab");

                            //Trust Anchors Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Trust Anchors Tab", "DNS/DnsServer/TrustAnchorsTab");

                            //Monitoring Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[2].child[3].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Monitoring Tab", "DNS/DnsServer/MonitoringTab");

            //Zones
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

                    //Global Names
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Global Names", "DNS/Zones/GlobalNames");
                    
                    //DNS Delegation
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[3].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Delegation", "DNS/Zones/DNSDelegation");

                    //Zone Properties
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Zone Properties", root, "DNS/ZoneProperties/ZonePropertyTabs");

                            //General Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "DNS/ZoneProperties/GeneralTab");

                            //Start of Authority (SOA) Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Start of Authority (SOA) Tab", "DNS/ZoneProperties/StartOfAuthorityTab");

                            //Name Servers Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Name Servers Tab", "DNS/ZoneProperties/NameServersTab");

                            //WINS Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "WINS Tab", "DNS/ZoneProperties/WINSTab");

                            //Zone Transfers Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Zone Transfers Tab", "DNS/ZoneProperties/ZoneTransfersTab");

                            //Security Tab
                            new HierarchicalUnit(tutorialList.child[0].child[1].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[1].child[3].child[9].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Security Tab", "DNS/ZoneProperties/SecurityTab");

            //DNS Records
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS Records", root);
            
                    //Host (A or AAAA)
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Host (A or AAAA)", "DNS/DNSRecords/HostRecord");

                    //Alias (CNAME)
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Alias (CNAME)", "DNS/DNSRecords/AliasRecord");

                    //Mail Exchanger (MX)
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Mail Exchanger (MX)", "DNS/DNSRecords/MailExchangerRecord");

                    //Other Records
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Other Records", "DNS/DNSRecords/OtherRecords");


















}