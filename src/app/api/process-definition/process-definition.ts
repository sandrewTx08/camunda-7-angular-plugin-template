export interface ProcessDefinition {
  processDefinitionId: string;
  processDefinitionKey: string;
  processDefinitionName: string;
  processDefinitionVersion: number;
  historyTimeToLive: number;
  finishedProcessInstanceCount: number;
  cleanableProcessInstanceCount: number;
  tenantId: string;
}
