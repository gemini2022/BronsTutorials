function Certificates() {

    //Certificates
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 60, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificates", root);
        tutorialList.child[0].child[3].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[3].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[3].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing Active Directory Certificate Services
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing Active Directory Certificate Services", root);

                    //Adding Active Directory Certificate Services Role (Standalone)
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding ADCS Role (Standalone)", "Certificates/InstallingActiveDirectoryCertificateServices/AddingAdcsRoleStandalone");

                    //Adding Active Directory Certificate Services Role (Enterprise)
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding ADCS Role (Enterprise)", "Certificates/InstallingActiveDirectoryCertificateServices/AddingAdcsRoleEnterprise");

            //CA Server
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "CA Server", root);

                    //Start Service
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Start Service", "Certificates/CaServer/StartService");

                    //Stop Service
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Stop Service", "Certificates/CaServer/StopService");

                    //Submit New Request
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Submit New Request", "Certificates/CaServer/SubmitNewRequest");

                    //Back Up CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Back Up CA", "Certificates/CaServer/BackUpCa");

                    //Restore CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Restore CA", "Certificates/CaServer/RestoreCa");

                    //Renew CA Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Renew CA Certificate", "Certificates/CaServer/RenewCaCertificate");

                    //CA Server Properties
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "CA Server Properties", root, "Certificates/CaServer/CaServerProperties");

                            //General Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "General Tab", "Certificates/CaServer/CaServerProperties/GeneralTab");

                            //Policy Module Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Policy Module Tab", "Certificates/CaServer/CaServerProperties/PolicyModuleTab");

                            //Exit Module Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Exit Module Tab", "Certificates/CaServer/CaServerProperties/ExitModuleTab");

                            //Enrollment Agents Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Enrollment Agents Tab", "Certificates/CaServer/CaServerProperties/EnrollmentAgentsTab");

                            //Auditing Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Auditing Tab", "Certificates/CaServer/CaServerProperties/AuditingTab");

                            //Recovery Agents Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Recovery Agents Tab", "Certificates/CaServer/CaServerProperties/RecoveryAgentsTab");

                            //Security Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Security Tab", "Certificates/CaServer/CaServerProperties/SecurityTab");

                            //Extensions Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Extensions Tab", "Certificates/CaServer/CaServerProperties/ExtensionsTab");

                            //Storage Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Storage Tab", "Certificates/CaServer/CaServerProperties/StorageTab");

                            //Certificate Managers Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[2].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[2].child[7].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificate Managers Tab", "Certificates/CaServer/CaServerProperties/CertificateManagersTab");

            //Revoked Certificates
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Revoked Certificates", root);

                    //Publish Certificate Revocation List
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Certificate Revocation List", "Certificates/RevokedCertificates/PublishCertificateRevocationList");

                    //Unrevoke Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Unrevoke Certificate", "Certificates/RevokedCertificates/UnrevokeCertificate");

                    //Revoked Certificates Properties
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapseLink(tutorialList.child[0].child[3].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Revoked Certificates Properties", root, "Certificates/RevokedCertificates/RevokedCertificatesProperties");

                            //CRL Publishing Parameters Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[3].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "CRL Publishing Parameters Tab", "Certificates/RevokedCertificates/RevokedCertificatesProperties/CrlPublishingParametersTab");

                            //View CRLs Tab
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[3].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[3].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "View CRLs Tab", "Certificates/RevokedCertificates/RevokedCertificatesProperties/ViewCrlsTab");

            //Issued Certificates
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Issued Certificates", root);

                    //View Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[4].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "View Certificate", "Certificates/IssuedCertificates/ViewCertificate");

                    //Revoke Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[4].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Revoke Certificate", "Certificates/IssuedCertificates/RevokeCertificate");

            //Pending Requests
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Pending Requests", root);

                    //Issue Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[5].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Issue Certificate", "Certificates/PendingRequests/IssueCertificate");

                    //Deny Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[5].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Deny Certificate", "Certificates/PendingRequests/DenyCertificate");

            //Failed Requests
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Failed Requests", root);

                    //Issue Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[6].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Issue Certificate", "Certificates/FailedRequests/IssueCertificate");

            //Certificate Templates
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificate Templates", root);

            //Requests
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Requests", root);

            //Autoenrollment
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Autoenrollment", root);

                    //Group Policy
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapse(tutorialList.child[0].child[3].child[9].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Group Policy", root);

                            //Create a Duplicate Template
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[9].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[9].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Create a Duplicate Template", "Certificates/Autoenrollment/GroupPolicy/CreateDuplicateTemplate");

                            //Publish Duplicate Template
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[9].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[9].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Duplicate Template", "Certificates/Autoenrollment/GroupPolicy/PublishDuplicateTemplate");

                            //Configure Group Policy
                            new HierarchicalUnit(tutorialList.child[0].child[3].child[9].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                                new Link(tutorialList.child[0].child[3].child[9].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Configure Group Policy", "Certificates/Autoenrollment/GroupPolicy/ConfigureGroupPolicy");

                    //By User
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new ExpandCollapse(tutorialList.child[0].child[3].child[9].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "By User", root);

            //Certificate Templates (MMC)
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificate Templates (MMC)", root);

            //Key Archival and Recovery
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Key Archival and Recovery", root);

                    //Identify a Key Recovery Agent
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Identify a Key Recovery Agent", "Certificates/KeyArchivalAndRecovery/IdentifyKeyRecoveryAgent");

                    //Publish Key Recovery Agent Template
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Key Recovery Agent Template", "Certificates/KeyArchivalAndRecovery/PublishKeyRecoveryAgentTemplate");

                    //Request Key Recovery Agent Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Request Key Recovery Agent Certificate", "Certificates/KeyArchivalAndRecovery/RequestKeyRecoveryAgentCertificate");

                    //Enable Key Archival
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Enable Key Archival", "Certificates/KeyArchivalAndRecovery/EnableKeyArchival");

                    //Configure Certificate Template for Key Archival
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Configure Certificate Template for Key Archival", "Certificates/KeyArchivalAndRecovery/ConfigureCertificateTemplateForKeyArchival");

                    //Publish Key Archival Enabled Certificate Template
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Key Archival Enabled Certificate Template", "Certificates/KeyArchivalAndRecovery/PublishKeyArchivalEnabledCertificateTemplate");

                    //Retrieve Archived Key
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Retrieve Archived Key", "Certificates/KeyArchivalAndRecovery/RetrieveArchivedKey");

                    //Recover Key
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Recover Key", "Certificates/KeyArchivalAndRecovery/RecoverKey");

                    //Import Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[11].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Import Certificate", "Certificates/KeyArchivalAndRecovery/ImportCertificate");

            //Smart Card Certificate Enrollment
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Smart Card Certificate Enrollment", root);
            
                    //Duplicate Smart Card Template
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Duplicate Smart Card Template", "Certificates/SmartCardCertificateEnrollment/DuplicateSmartCardTemplate");

                    //Publish Smart Card Template
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Smart Card Template", "Certificates/SmartCardCertificateEnrollment/PublishSmartCardTemplate");

                    //Identify an Enrollment Agent
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Identify an Enrollment Agent", "Certificates/SmartCardCertificateEnrollment/IdentifyEnrollmentAgent");

                    //Publish Enrollment Agent Template
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish Enrollment Agent Template", "Certificates/SmartCardCertificateEnrollment/PublishEnrollmentAgentTemplate");

                    //Request Enrollment Agent Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Request Enrollment Agent Certificate", "Certificates/SmartCardCertificateEnrollment/RequestEnrollmentAgentCertificate");

                    //Create Smart Card Certificate For User
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[12].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Create Smart Card Certificate For User", "Certificates/SmartCardCertificateEnrollment/CreateSmartCardCertificateForUser");

            //Setting Up a Two Tier PKI Hierarchy
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Setting Up a Two Tier PKI Hierarchy", root);
            
                    //CAPolicy.inf
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "CAPolicy.inf", "Certificates/SettingUpTwoTierPkiHierarchy/CaPolicy");

                    //Offline Standalone Root CA Installation
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Offline Standalone Root CA Installation", "Certificates/SettingUpTwoTierPkiHierarchy/OfflineStandaloneRootCaInstallation");

                    //Set Domain Namespace For Offline Root CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Set Domain Namespace For Offline Root CA", "Certificates/SettingUpTwoTierPkiHierarchy/SetDomainNamespaceForOfflineRootCa");

                    //Set Validity Period For Root CA's Issued Certificates
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Set Validity Period For Root CA's Issued Certificates", "Certificates/SettingUpTwoTierPkiHierarchy/SetValidityPeriodForRootCaIssuedCertificates");

                    //Update CDP And AIA Location Informtion
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[5], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Update CDP And AIA Location Informtion", "Certificates/SettingUpTwoTierPkiHierarchy/UpdateCdpAiaLocationInformtion");

                    //Update CRL Period
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Update CRL Period", "Certificates/SettingUpTwoTierPkiHierarchy/UpdateCrlPeriod");

                    //Publish CRL
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[7], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Publish CRL", "Certificates/SettingUpTwoTierPkiHierarchy/PublishCrl");

                    //Enterprise Subordinate CA Installation
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Enterprise Subordinate CA Installation", "Certificates/SettingUpTwoTierPkiHierarchy/EnterpriseSubordinateCaInstallation");

                    //Copy CRL & CRT File From Root CA To Sub CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Copy CRL & CRT File From Root CA To Sub CA", "Certificates/SettingUpTwoTierPkiHierarchy/CopyCrlCrtFileFromRootCaToSubCa");

                    //Copy Certificate Request From Sub CA To Root CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Copy Certificate Request From Sub CA To Root CA", "Certificates/SettingUpTwoTierPkiHierarchy/CopyCertificateRequestFromSubCaToRootCa");

                    //Submit Certificate Request
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[11], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Submit Certificate Request", "Certificates/SettingUpTwoTierPkiHierarchy/SubmitCertificateRequest");

                    //Issue Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Issue Certificate", "Certificates/SettingUpTwoTierPkiHierarchy/IssueCertificate");

                    //Export Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Export Certificate", "Certificates/SettingUpTwoTierPkiHierarchy/ExportCertificate");

                    //Copy Certificate From Root CA To Sub CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[14], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Copy Certificate From Root CA To Sub CA", "Certificates/SettingUpTwoTierPkiHierarchy/CopyCertificateFromRootCaToSubCa");

                    //Install Certificate
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[15], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Install Certificate", "Certificates/SettingUpTwoTierPkiHierarchy/InstallCertificate");

                    //Start Certificate Service
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[13], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[13].child[16], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Start Certificate Service", "Certificates/SettingUpTwoTierPkiHierarchy/StartCertificateService");





















}