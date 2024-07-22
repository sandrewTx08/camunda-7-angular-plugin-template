export interface ProcessInstance {
  id: string;
  businessKey: null;
  processDefinitionId: string;
  processDefinitionKey: string;
  processDefinitionName: string;
  processDefinitionVersion: number;
  startTime: string;
  endTime: null;
  removalTime: null;
  durationInMillis: null;
  startUserId: null;
  startActivityId: string;
  deleteReason: null;
  rootProcessInstanceId: string;
  superProcessInstanceId: null;
  superCaseInstanceId: null;
  caseInstanceId: null;
  tenantId: null;
  state: string;
}
