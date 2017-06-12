function VPN() {

    //VPN
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 80, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "VPN", root);
        tutorialList.child[0].child[4].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[4].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[4].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing VPN
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing VPN", root);

                    //Server Configuration
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Server Configuration", "VPN/InstallingVpn/ServerConfiguration");

                    //Adding Network Policy and Access Services Role
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding Network Policy and Access Services Role", "VPN/InstallingVpn/AddingNetworkPolicyAndAccessServicesRole");

                    //Configure and Enable Routing and Remote Access
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Configure and Enable Routing and Remote Access", "VPN/InstallingVpn/ConfigureAndEnableRoutingAndRemoteAccess");

            //VPN Server
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "VPN Server", root);

                    //Disable Routing and Remote Access
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Disable Routing and Remote Access", "VPN/VpnServer/DisableRoutingAndRemoteAccess");

                    //Disable Routing and Remote Access
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Start/Stop/Pause Server", "VPN/VpnServer/StartStopPauseServer");

                    //VPN Server Properties
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "VPN Server Properties", root, "VPN/VpnServer/VpnServerProperties");

                            //General Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "VPN/VpnServer/VpnServerProperties/GeneralTab");

                            //Security Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Security Tab", "VPN/VpnServer/VpnServerProperties/SecurityTab");

                            //IPv4 Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv4 Tab", "VPN/VpnServer/VpnServerProperties/Ipv4Tab");

                            //IPv6 Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IPv6 Tab", "VPN/VpnServer/VpnServerProperties/Ipv6Tab");

                            //IKEv2 Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IKEv2 Tab", "VPN/VpnServer/VpnServerProperties/Ikev2Tab");

                            //PPP Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "PPP Tab", "VPN/VpnServer/VpnServerProperties/PppTab");

                            //Logging Tab
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[2].child[3].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Logging Tab", "VPN/VpnServer/VpnServerProperties/LoggingTab");

            //Network Interfaces
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Network Interfaces", root);

                    //Network Interfaces Details
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Network Interfaces Details", "VPN/NetworkInterfaces/NetworkInterfacesDetails");

                    //New Demand Dial Interface
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "New Demand Dial Interface", "VPN/NetworkInterfaces/NewDemandDialInterface");

            //Remote Access Clients
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Remote Access Clients", root);

                    //Remote Access Clients Details
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Remote Access Clients Details", "VPN/RemoteAccessClients/RemoteAccessClientsDetails");

            //Ports
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Ports", root);

                    //Ports Details
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[4].child[5].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Ports Details", "VPN/Ports/PortsDetails");

                    //Ports Properties
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[4].child[5].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Ports Properties", root, "VPN/Ports/PortsProperties");

                        //Device Tab
                        new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                            new ExpandCollapseLink(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Device Tab", root, "VPN/Ports/PortsProperties/DeviceTab");

                            //IKEv2
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[5].child[2].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "IKEv2", "VPN/Ports/PortsProperties/DeviceTab/IKEv2");

                            //L2TP
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[5].child[2].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "L2TP", "VPN/Ports/PortsProperties/DeviceTab/L2TP");

                            //PPPoE
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[5].child[2].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "PPPoE", "VPN/Ports/PortsProperties/DeviceTab/PPPOE");

                            //PPTP
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[5].child[2].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "PPTP", "VPN/Ports/PortsProperties/DeviceTab/PPTP");

                            //SSTP
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[5].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[5].child[2].child[1].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "SSTP", "VPN/Ports/PortsProperties/DeviceTab/SSTP");

            //Remote Access Logging & Policies
            new HierarchicalUnit(tutorialList.child[0].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Remote Access Logging & Policies", root);

                    //Launch NPS
                    new HierarchicalUnit(tutorialList.child[0].child[4].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[4].child[6].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Launch NPS", root, "VPN/RemoteAccessLoggingAndPolicies/LaunchNPS");

                        //Network Policies
                        new HierarchicalUnit(tutorialList.child[0].child[4].child[6].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                            new ExpandCollapseLink(tutorialList.child[0].child[4].child[6].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Network Policies", root, "VPN/RemoteAccessLoggingAndPolicies/LaunchNPS/NetworkPolicies");

                            //New Network Policy
                            new HierarchicalUnit(tutorialList.child[0].child[4].child[6].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[4].child[6].child[1].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "New Network Policy", "VPN/RemoteAccessLoggingAndPolicies/LaunchNPS/NetworkPolicies/NewNetworkPolicy");

























}