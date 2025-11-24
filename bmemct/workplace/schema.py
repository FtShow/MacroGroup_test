import graphene
from graphene_django import DjangoObjectType
from .models import Workplace

class WorkplaceType(DjangoObjectType):
    class Meta:
        model = Workplace
        fields = ("id", "name", "description", "ip_address")

class CreateWorkplace(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String()
        ip_address = graphene.String()

    workplace = graphene.Field(WorkplaceType)

    def mutate(self, info, name, description="", ip_address=""):
        workplace = Workplace.objects.create(
            name=name,
            description=description or "",
            ip_address=ip_address or ""
        )
        return CreateWorkplace(workplace=workplace)

class Query(graphene.ObjectType):
    workplaces = graphene.List(WorkplaceType)

    def resolve_workplaces(self, info):
        return Workplace.objects.all()

class Mutation(graphene.ObjectType):
    create_workplace = CreateWorkplace.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
