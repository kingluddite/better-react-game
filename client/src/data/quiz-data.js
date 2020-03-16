import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>Is this a configurable in an Okta sign-on policy?</span>,
    answers: [
      <span>Set the password length</span>,
      <span>Set the length of the security question answer</span>,
      <span>Allow or deny access</span>,
    ],
    correct: 2,
    tag: ['sign-on policy'],
    answerKeyImg: '59-sign-in-policy2',
  },
  {
    question: (
      <span>Is this a threat that Okta rate limits protect against?</span>
    ),
    answers: [
      <span>Denial-of-service (DoS) attacks</span>,
      <span>Credential harvesting</span>,
    ],
    correct: 0,
    tag: ['okta rate limits'],
    answerKeyImg: '59-okta-rate-limits',
  },
  {
    question: (
      <span>
        Is this what an Okta Administrator should use to minimize import
        conflicts between a profile master source of Okta?
      </span>
    ),
    answers: [
      <span>Group Membership Rules</span>,
      <span>Matching Rules</span>,
      <span>Application Sign On Rules</span>,
    ],
    correct: 1,
    tag: ['profile master'],
    answerKeyImg: '58-minimize-conflicts',
  },
  {
    question: (
      <span>
        Is this a true statement regarding the Single Sign-On (SSO) URL for a
        SAML application when an administrator uses the Okta Application
        integration Wizard (AIW)?
      </span>
    ),
    answers: [
      <span>The SSO URL sends the authentication response and ID token</span>,
      <span>
        The SSO URL provides SSO for applications that do NOT support
        proprietary federated sign-on methods
      </span>,
      <span>
        The SSO URL is where the SAML assertion is sent with an HTTP POST
      </span>,
      <span>
        The SSO URL represents a user's explicit permission to allow an
        application to access resources protected by scopes
      </span>,
    ],
    correct: 2,
    tag: ['SSO', 'SAML'],
    answerKeyImg: '57-saml',
  },
  {
    question: (
      <span>
        An Okta Administrator needs to enable Active Directory mastered users to
        change passwords in Okta. Is this a step that the administrator needs to
        take?
      </span>
    ),
    answers: [
      <span>Set the Active Directory recovery options to true</span>,
      <span>Install the Okta Password Sync Agent</span>,
      <span>Configure Desktop SSO</span>,
      <span>
        Ensure the Okta service account has elevated permissions in Active
        Directory
      </span>,
    ],
    correct: 3,
    tag: ['AD'],
    answerKeyImg: '55-ad-change-pwd',
  },
  {
    question: (
      <>
        <span>
          A company has implemented multifactor authentication (MFA) in an Okta
          org
        </span>
        <ul>
          <li>
            All members of the marketing team are required to configure the
            Security question, Google Authentication, SMS, and Okta Verify
            during the log on process
          </li>
          <li>
            The marketing manager is not required to configure a Security
            Question during logon.
          </li>
        </ul>
        <p>Review the image and answer the question.</p>
        <img src="https://i.imgur.com/XVHypon.png" alt="screenshot" />
      </>
    ),
    answers: [
      <span>
        The manager's policy takes precedence over the marketing policy
      </span>,
    ],
    correct: 0,
    tag: ['mfa'],
    answerKeyImg: '51-mfa',
  },
  {
    question: <span>Is this the purpose of rate limiting</span>,
    answers: [
      <span>
        Creating API endpoint throttling limits to protect the validity of how a
        developer will call the API
      </span>,
      <span>
        Creating API endpoint throttling limits to protect the Active Directory
        Agent service from load spikes or service interruptions caused by
        submitted requests
      </span>,
      <span>
        Creating API endpoint throttling limits to protect the Okta Service from
        load spikes or service interruptions caused by submitted requests
      </span>,
      <span>
        Creating API endpoint throttling limits to protect the integrity of the
        code that a developer writes
      </span>,
    ],
    correct: 2,
    tag: ['api rate limit'],
    answerKeyImg: '54-rate-limit-purpose',
  },
  {
    question: (
      <span>
        Is this the location of the Okta Active Directory Agent logs for a
        default installation?
      </span>
    ),
    answers: [
      <span>C:Okta\Okta AD Agent Service</span>,
      <span>C:\Program Filesx86\Okta\Okta AD Agent\Logs</span>,
    ],
    correct: 9991,
    tag: ['AD'],
    answerKeyImg: '53-location-ad-logs',
  },
  {
    question: (
      <span>
        In Active Directory the password group policy object (GPO) indicates
        that all passwords
        <ul>
          <li>Must have a minimum 10-character length</li>
          <li>
            Must combine special characters, upper, and lowercase characters
          </li>
          <li>Must be changed every 60 days</li>
        </ul>
      </span>
    ),
    answers: [
      <span>Group</span>,
      <span>Multifactor authentication</span>,
      <span>Application</span>,
      <span>None of the above</span>,
      <span>Find the answer to this question!</span>,
    ],
    correct: 3,
    tag: ['AD'],
    answerKeyImg: '52-ad-pwd-group-policy',
  },
  {
    question: (
      <span>
        Is this the period of time that Okta system log data is retained
      </span>
    ),
    answers: [<span>Three months</span>, <span>One year</span>],
    correct: 0,
    tag: ['system log'],
    answerKeyImg: '38-otka-log',
  },
  {
    question: (
      <span>Does this feature sync Okta passwords to Active Directory?</span>
    ),
    answers: [
      <span>Delegated Authentication</span>,
      <span>Desktop SSO</span>,
      <span>Password Sync Agent</span>,
      <span>Sync Password</span>,
    ],
    correct: 3,
    tag: ['AD'],
    answerKeyImg: '48-sync-okta-pwd',
  },
  {
    question: (
      <span>
        Is this a true statement regarding incremental imports from Active
        Directory to Okta
      </span>
    ),
    answers: [
      <span>
        Both new unmodified existing Active Directory accounts are imported
      </span>,
      <span>
        The schema is NOT updated but updated accounts from selected
        organizational units (OUs) are imported
      </span>,
      <span>Matching rules are evaluated on all unconfirmed users</span>,
    ],
    correct: 1,
    tag: ['AD'],
    answerKeyImg: '43-incremental-imports',
  },
  {
    question: (
      <span>Is this a benefit of the Access Request Workflow capability</span>
    ),
    answers: [
      <span>
        End users can optionally bypass the approval process and get faster
        access to applications
      </span>,
      <span>
        It reduces the IT workload by enabling others to approve access to
        applications
      </span>,
      <span>
        It enables business application owners, who are most knowledgeable about
        their applications, to make a decision
      </span>,
    ],
    correct: 1,
    tag: ['access request workflow'],
    answerKeyImg: '03-access-request-workflow',
  },
  {
    question: (
      <div>
        The Okta user profile has the following information:{' '}
        <strong>First Name</strong>Jack
        <strong>
          <br />
          Last Name
        </strong>
        Bailey<strong>Username</strong>jack.bailey@oktaice001.com
        <p>
          An administrator used the following Okta Expression to transform the
          email address so that it is complaint with a new company policy.{' '}
          <span>
            toLowerCase(substring( user.firstName, 0, 1 )) + "." +
            toLowerCase(user.lastName)@oktaice.com
          </span>
          Is the following the result of this expression?
        </p>
      </div>
    ),
    answers: [
      <span>jack.bailey@oktaice.com</span>,
      <span>jack.Bailey@oktaice.com</span>,
      <span>jackb@oktaice.com</span>,
      <span>j.b@oktaice.com</span>,
      <span>jbailey@oktaice.com</span>,
      <span>j.bailey@oktaice.com</span>,
    ],
    correct: 5,
    tag: ['okta expressions'],
    answerKeyImg: '41-okta-expressions',
  },
  {
    question: (
      <span>
        An Okta Administrator needs to configure Microsoft Office 365 for SSO
        and provisioning with Okta. Is this a user provisioning type for Office
        365 that an Okta Administrator can enable to provision AD mastered users
      </span>
    ),
    answers: [<span>Profile Sync</span>, <span>Universal Sync</span>],
    correct: 1,
    tag: ['ad', 'o365'],
    answerKeyImg: '45-o365',
  },
  {
    question: (
      <span>
        An Okta Administrator needs to implement a MFA factor type that allows
        end users to access applications without the need for a phone or a
        mobile device. Is this the MFA factor that the administrator should
        implement?
      </span>
    ),
    answers: [
      <span>Okta Verify</span>,
      <span>Yubikey</span>,
      <span>Google Authenticator</span>,
    ],
    correct: 1,
    tag: ['mfa', 'admin-cert'],
    answerKeyImg: '50-mfa-no-devices',
  },
  // {
  //   question: <span>XXX</span>,
  //   answers: [<span>XXX</span>, <span>XXX</span>],
  //   correct: 9991,
  //   tag: [''],
  //   answerKeyImg: 'xxx',
  // },
  // {
  //   question: <span>XXX</span>,
  //   answers: [<span>XXX</span>, <span>XXX</span>],
  //   correct: 9991,
  //   tag: [''],
  //   answerKeyImg: 'xxx',
  // },
  // {
  //   question: <span>XXX</span>,
  //   answers: [<span>XXX</span>, <span>XXX</span>],
  //   correct: 9991,
  //   tag: [''],
  //   answerKeyImg: 'xxx',
  // },
  // {
  //   question: <span>XXX</span>,
  //   answers: [<span>XXX</span>, <span>XXX</span>],
  //   correct: 9991,
  //   tag: [''],
  //   answerKeyImg: 'xxx',
  // },
  // {
  //   question: <span>XXX</span>,
  //   answers: [<span>XXX</span>, <span>XXX</span>],
  //   correct: 9991,
  //   tag: [''],
  // },
  {
    question: (
      <span>
        Is this statement true for a user migrated from an Active Directory
        mastered account to an Okta mastered account?
      </span>
    ),
    answers: [
      <span>The user can change the username from within Okta</span>,
      <span>The user can change the primary email address</span>,
    ],
    correct: 1,
    tag: ['admin', 'ad'],
    answerKeyImg: '05-migrated-user',
  },
  {
    question: (
      <div>
        In AD, the password group policy object (GPO) indicates that all
        passwords:
        <ul>
          <li>Must have a minimum 10-character length</li>
          <li>
            Must combine special characters, upper, and lowercase characters
          </li>
          <li>Must be changed every 60 days</li>
          <li>None of the above</li>
        </ul>
      </div>
    ),
    answers: [
      <span>Multifactor authentication (MFA)</span>,
      <span>Group</span>,
      <span>Application</span>,
    ],
    correct: 9991,
    tag: ['AD', 'password'],
    answerKeyImg: '52-ad-pwd-group-policy',
  },
  {
    question: (
      <span>
        A company has the following environment:{' '}
        <ul>
          <li>
            All employees and their group memberships are in an Active Directory
            domain
          </li>
          <li>
            A Lightweight Directory Access Protocol (LDAP) server contains all
            of the company's external users (customers and partners)
          </li>
          <li>
            All of the employee user accounts are replicated in the LDAP server
            from Active Directory
          </li>
          <li>
            All company employees, customers, and partners need access to
            certain applications through Okta
          </li>
        </ul>
        <p>
          The company has integrated both Active Directory and LDAP with Okta.
          Is this a valid method to resolve the user duplication arising from
          the employee accounts existing in both AD and LDAP{' '}
        </p>
      </span>
    ),
    answers: [
      <span>
        Specify the order in which the directories will be imported, and Okta
        will automatically resolve the collisions
      </span>,
      <span>
        If the employee, customer, and partner accounts are stored in different
        Organizational Units (OUs) in the LDAP server, then Okta can be
        configured to exclude the employee OU. This action will prevent the
        collision with the same users also being imported from AD
      </span>,
      <span>Delete the duplicate user object from Okta after the import</span>,
    ],
    correct: 1,
    tag: ['ad', 'ldap', 'admin-cert'],
    answerKeyImg: '07-AD-LDAP',
  },
  {
    question: (
      <span>
        The Okta RADIUS Agent is not receiving traffic or authentication is
        failing is then a possible reason for the failures?
      </span>
    ),
    answers: [
      <span>RADIUS traffic is NOT flowing over the designated UDP port</span>,
      <span>RADIUS traffic is NOT flowing over the designated TCP port</span>,
    ],
    correct: 0,
    tag: ['RADIUS', 'admin cert'],
    answerKeyImg: '08-RADIUS',
  },
  {
    question: (
      <span>
        Is this policy type in which short message service (SMS) self-service
        password reset for end users is enabled?
      </span>
    ),
    answers: [
      <span>Password policy</span>,
      <span>Multifactor authentication (MFA) policy</span>,
    ],
    correct: 1,
    tag: ['policy'],
    answerKeyImg: 'xxx',
  },
  {
    question: (
      <span>
        Is the following the correct method of enabling Verbose Logging in the
        Okta Active Directory (AD) Agent?
      </span>
    ),

    answers: [
      <span>Clear the Event Viewer</span>,
      <span>
        Toggle the verbose logging option in the Okta Administrator application
      </span>,
      <span>
        Toggle the verbose logging option in the Active Directory Users and
        Computers
      </span>,
      <span>
        Edit the Agent Config file to set Verbose Logging as "True" and restart
        the Agent Service
      </span>,
      <span>
        Call Okta Support to request that Verbose Logging be turned on
      </span>,
    ],
    correct: 3,
    tag: ['AD'],
    answerKeyImg: '56-verbose-logging',
  },
  {
    question: (
      <span>
        Is this a true statement regarding the Single Sign-On (SSO) for a SAML
        application when an administrator uses the Okta Application Integration
        Wizard (AIW)?
      </span>
    ),
    answers: [
      <span>The SSO URL sends the authentication response and ID token</span>,
      <span>
        The SSO URL provides SSO for applications that do NOT support
        proprietary federated sign-on methods
      </span>,
      <span>
        The SSO URL is where the SAML assertion is sent with an HTTP POST
      </span>,
      <span>
        The SSO URL represents a user's explicit permission to allow an
        application to access resources protected by scopes
      </span>,
    ],
    correct: 2,
    tag: ['saml'],
  },
];

export default QUESTION_DATA;
